import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

const useMounted = () => {
  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  if (!isMounted) {
    return null;
  }
};

export default useMounted;
