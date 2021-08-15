import React from "react";

export interface QueueMethods<T> {
  add: (item: T) => void;
  remove: () => T;
  first: T;
  last: T;
  size: number;
}

function useQueue<T>(initialValue: T[] = []): QueueMethods<T> {
  const [state, set] = React.useState(initialValue);
  return {
    add: (value) => {
      set((queue) => [...queue, value]);
    },
    remove: () => {
      let result: any;
      set(([first, ...rest]) => {
        result = first;
        return rest;
      });
      return result;
    },
    get first() {
      return state[0];
    },
    get last() {
      return state[state.length - 1];
    },
    get size() {
      return state.length;
    },
  };
}

export default useQueue;
