import React from "react";
import useIsomorphicEffect from "../useIsomorphicEffect";

export interface Observable<T> {
  subscribe: (listener: (value: T) => void) => {
    unsubscribe: () => void;
  };
}

function useObservable<T>(observable: Observable<T>): T | undefined;
function useObservable<T>(observable: Observable<T>, initialValue: T): T;
function useObservable<T>(
  observable: Observable<T>,
  initialValue?: T
): T | undefined {
  const [value, update] = React.useState<T | undefined>(initialValue);

  useIsomorphicEffect(() => {
    const subscriber = observable.subscribe(update);

    return () => {
      subscriber.unsubscribe();
    };
  }, [observable]);

  return value;
}

export default useObservable;
