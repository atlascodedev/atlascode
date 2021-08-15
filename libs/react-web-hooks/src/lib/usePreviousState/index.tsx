import React from "react";

function usePreviousState<T>(state: T): T | undefined {
  const ref = React.useRef<T>();

  React.useEffect(() => {
    ref.current = state;
  });

  return ref.current;
}

export default usePreviousState;
