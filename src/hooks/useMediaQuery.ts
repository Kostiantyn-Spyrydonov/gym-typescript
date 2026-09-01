import { useSyncExternalStore } from "react";

const useMediaQuery = (query: string) => {
  const subscribe = (callback: () => void) => {
    const media = window.matchMedia(query);
    media.addEventListener("change", callback);
    return () => media.removeEventListener("change", callback);
  };

  const getSnapshot = () => window.matchMedia(query).matches;

  return useSyncExternalStore(subscribe, getSnapshot);
};

export default useMediaQuery;
