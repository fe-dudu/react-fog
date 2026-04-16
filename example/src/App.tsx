import Fog from 'react-fog';

import { useTheme } from './hooks/useTheme';

const horizontalItems = Array.from({ length: 12 }, (_, index) => `Item ${index + 1}`);
const gridItems = Array.from({ length: 40 }, (_, index) => `Cell ${index + 1}`);
const verticalItems = Array.from({ length: 18 }, (_, index) => `Row ${index + 1}`);
const cardItems = Array.from({ length: 50 }, (_, index) => `Report ${index + 1}`);

export default function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:px-10">
        <header className="rounded-[28px] border border-slate-200/80 bg-white/75 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-900/75 dark:shadow-[0_20px_60px_rgba(2,6,23,0.45)]">
          <div className="flex flex-col gap-4 px-6 py-6 md:flex-row md:items-end md:justify-between md:px-8 md:py-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl dark:text-slate-50">
                react-fog example
              </h1>
              <p className="mt-2 text-sm leading-6 text-slate-600 md:text-base dark:text-slate-300">
                Scroll the containers to see the fog edges. Tailwind styles respond to the `dark` class on the root
                element.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-950">
                <button
                  type="button"
                  aria-pressed={theme === 'light'}
                  onClick={() => setTheme('light')}
                  className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 aria-pressed:bg-slate-900 aria-pressed:text-white aria-pressed:shadow-sm"
                >
                  Light
                </button>
                <button
                  type="button"
                  aria-pressed={theme === 'dark'}
                  onClick={() => setTheme('dark')}
                  className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 aria-pressed:bg-white aria-pressed:text-slate-950 aria-pressed:shadow-sm"
                >
                  Dark
                </button>
              </div>
            </div>
          </div>
        </header>

        <section className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="m-0 text-lg font-semibold text-slate-900 md:text-xl dark:text-slate-50">Horizontal</h2>
            <span className="text-sm text-slate-500 dark:text-slate-400">fogSize 12px</span>
          </div>
          <div className="rounded-[28px] border border-slate-200/80 bg-white/80 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] dark:border-slate-800/70 dark:bg-slate-950/55 dark:shadow-[0_18px_40px_rgba(2,6,23,0.35)]">
            <Fog fogSize={12} fogInnerColor="var(--color-fog-inner)" fogOuterColor="var(--color-fog-outer-horizontal)">
              <div className="flex min-w-[860px] gap-3 p-1">
                {horizontalItems.map((label) => (
                  <div
                    className="flex-none rounded-full border border-slate-200 bg-slate-100 px-4 py-3 font-semibold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                    key={label}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </Fog>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="m-0 text-lg font-semibold text-slate-900 md:text-xl dark:text-slate-50">Vertical list</h2>
            <span className="text-sm text-slate-500 dark:text-slate-400">height 220px</span>
          </div>
          <div className="rounded-[28px] border border-slate-200/80 bg-white/80 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] dark:border-slate-800/70 dark:bg-slate-950/55 dark:shadow-[0_18px_40px_rgba(2,6,23,0.35)]">
            <Fog
              height={220}
              fogSize={10}
              fogInnerColor="var(--color-fog-inner)"
              fogOuterColor="var(--color-fog-outer-vertical)"
            >
              <div className="flex flex-col gap-3 p-1">
                {verticalItems.map((label) => (
                  <div
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
                    key={label}
                  >
                    <span className="font-semibold text-slate-800 dark:text-slate-100">{label}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Updated today</span>
                  </div>
                ))}
              </div>
            </Fog>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="m-0 text-lg font-semibold text-slate-900 md:text-xl dark:text-slate-50">Both axes</h2>
            <span className="text-sm text-slate-500 dark:text-slate-400">height 180px</span>
          </div>
          <div className="rounded-[28px] border border-slate-200/80 bg-white/80 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] dark:border-slate-800/70 dark:bg-slate-950/55 dark:shadow-[0_18px_40px_rgba(2,6,23,0.35)]">
            <Fog
              height={180}
              fogSize={12}
              fogInnerColor="var(--color-fog-inner)"
              fogOuterColor="var(--color-fog-outer-both)"
              fogZIndex={2}
            >
              <div className="grid w-max grid-cols-8 gap-3 p-1">
                {gridItems.map((label) => (
                  <div
                    className="flex h-[60px] w-[120px] items-center justify-center rounded-2xl border border-slate-200 bg-linear-to-br from-slate-50 to-slate-200 text-sm text-slate-700 dark:border-slate-700 dark:from-slate-800 dark:to-slate-950 dark:text-slate-100"
                    key={label}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </Fog>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="m-0 text-lg font-semibold text-slate-900 md:text-xl dark:text-slate-50">
              Thick fog on tinted surface
            </h2>
            <span className="text-sm text-slate-500 dark:text-slate-400">fogSize 20px</span>
          </div>
          <div className="rounded-[28px] border border-amber-200/80 bg-linear-to-br from-amber-100 to-amber-200 p-4 shadow-[0_24px_60px_rgba(146,120,78,0.08)] dark:border-amber-900/50 dark:from-amber-950 dark:to-slate-950 dark:shadow-[0_24px_60px_rgba(2,6,23,0.45)]">
            <Fog
              height={200}
              fogSize={20}
              fogInnerColor="var(--color-fog-inner)"
              fogOuterColor="var(--color-fog-outer-feature)"
            >
              <div className="grid w-max grid-cols-6 gap-3 p-1">
                {cardItems.map((label) => (
                  <article
                    className="w-[160px] rounded-2xl border border-amber-200 bg-white px-4 py-4 shadow-[0_6px_18px_rgba(146,120,78,0.12)] dark:border-amber-900/60 dark:bg-slate-900 dark:shadow-[0_6px_18px_rgba(2,6,23,0.35)]"
                    key={label}
                  >
                    <p className="m-0 mb-1 font-bold text-amber-950 dark:text-amber-100">{label}</p>
                    <p className="m-0 text-xs text-amber-800 dark:text-amber-200/80">Weekly summary · 6 metrics</p>
                  </article>
                ))}
              </div>
            </Fog>
          </div>
        </section>
      </div>
    </div>
  );
}
