import { RefObject, useSyncExternalStore } from "react";

interface FogState {
  isTop: boolean;
  isBottom: boolean;
  isLeft: boolean;
  isRight: boolean;
}

const useFog = (ref: RefObject<HTMLElement>): FogState => {
  const subscribe = (callback: () => void) => {
    const el = ref.current;
    if (!el) return () => {};

    window.addEventListener("resize", callback);
    el.addEventListener("scroll", callback);

    return () => {
      window.removeEventListener("resize", callback);
      el.removeEventListener("scroll", callback);
    };
  };

  const getSnapshot = (): FogState => {
    const el = ref.current;
    if (!el) return { isTop: false, isBottom: false, isLeft: false, isRight: false };

    return {
      isTop: el.scrollTop <= 0,
      isBottom: el.scrollTop + el.clientHeight + 1 >= el.scrollHeight,
      isLeft: el.scrollLeft <= 0,
      isRight: el.scrollLeft + el.clientWidth + 1 >= el.scrollWidth,
    };
  };

  const getServerSnapshot = (): FogState => {
    return { isTop: false, isBottom: false, isLeft: false, isRight: false };
  };

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useFog;
