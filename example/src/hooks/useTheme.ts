import { useCallback, useSyncExternalStore } from 'react';

export type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'react-fog-example-theme';
const THEME_CHANGE_EVENT = 'react-fog-example-theme-change';

const isTheme = (value: string | null): value is Theme => value === 'light' || value === 'dark';

const readStoredTheme = (): Theme | null => {
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return isTheme(storedTheme) ? storedTheme : null;
};

const getSystemTheme = (): Theme => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

const readRootTheme = (): Theme | null => {
  if (document.documentElement.classList.contains('dark')) {
    return 'dark';
  }

  if (document.documentElement.classList.contains('light')) {
    return 'light';
  }

  return null;
};

const getSnapshot = (): Theme => readStoredTheme() ?? readRootTheme() ?? getSystemTheme();

const subscribe = (callback: () => void) => {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const onMediaChange = () => callback();
  const onThemeChange = (event: Event) => {
    if (event instanceof StorageEvent && event.key !== null && event.key !== THEME_STORAGE_KEY) {
      return;
    }

    callback();
  };

  media.addEventListener('change', onMediaChange);
  window.addEventListener(THEME_CHANGE_EVENT, onThemeChange);
  window.addEventListener('storage', onThemeChange);

  return () => {
    media.removeEventListener('change', onMediaChange);
    window.removeEventListener(THEME_CHANGE_EVENT, onThemeChange);
    window.removeEventListener('storage', onThemeChange);
  };
};

export function getInitialTheme(): Theme {
  return readStoredTheme() ?? getSystemTheme();
}

function bootstrapTheme(): void {
  if (typeof document === 'undefined') {
    return;
  }

  const theme = getInitialTheme();
  const root = document.documentElement;

  root.classList.toggle('dark', theme === 'dark');
  root.classList.toggle('light', theme === 'light');
  root.style.colorScheme = theme;
}

bootstrapTheme();

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot);

  const setTheme = useCallback((theme: Theme) => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.classList.toggle('light', theme === 'light');
    root.style.colorScheme = theme;
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }, []);

  return { theme, setTheme };
}
