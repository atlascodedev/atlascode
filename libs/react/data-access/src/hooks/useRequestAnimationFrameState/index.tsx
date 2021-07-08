import React, { Dispatch, SetStateAction } from "react";
import useUnmount from "../useUnmount";

const useRequestAnimationFrameState = <S,>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>] => {
  const frame = React.useRef(0);
  const [state, setState] = React.useState(initialState);

  const setRafState = React.useCallback((value: S | ((prevState: S) => S)) => {
    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      setState(value);
    });
  }, []);

  useUnmount(() => {
    cancelAnimationFrame(frame.current);
  });

  return [state, setRafState];
};

export default useRequestAnimationFrameState;
