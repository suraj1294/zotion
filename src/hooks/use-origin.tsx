import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export function useOrigin() {
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  if (!mounted) return "";

  return origin;
}
