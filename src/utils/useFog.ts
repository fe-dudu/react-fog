import { RefObject, useSyncExternalStore, useRef, useCallback } from "react";

interface FogState {
  isTop: boolean;
  isBottom: boolean;
  isLeft: boolean;
  isRight: boolean;
}

const useFog = (ref: RefObject<HTMLElement>): FogState => {
  const stateRef = useRef<FogState>({
    isTop: true,
    isBottom: true,
    isLeft: true,
    isRight: true,
  });

  const calculateState = useCallback((): FogState => {
    const el = ref.current;
    if (!el) return stateRef.current;

    const newState = {
      isTop: el.scrollTop <= 0,
      isBottom: el.scrollTop + el.clientHeight + 1 >= el.scrollHeight,
      isLeft: el.scrollLeft <= 0,
      isRight: el.scrollLeft + el.clientWidth + 1 >= el.scrollWidth,
    };

    if (JSON.stringify(newState) !== JSON.stringify(stateRef.current)) {
      stateRef.current = newState;
    }

    return stateRef.current;
  }, [ref]);

  const subscribe = useCallback(
    (callback: () => void) => {
      const el = ref.current;
      if (!el) return () => {};

      const handleChange = () => {
        calculateState();
        callback();
      };

      window.addEventListener("resize", handleChange);
      el.addEventListener("scroll", handleChange);

      return () => {
        window.removeEventListener("resize", handleChange);
        el.removeEventListener("scroll", handleChange);
      };
    },
    [ref, calculateState],
  );

  const getSnapshot = useCallback(() => {
    return calculateState();
  }, [calculateState]);

  const getServerSnapshot = useCallback((): FogState => {
    return stateRef.current;
  }, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useFog;
