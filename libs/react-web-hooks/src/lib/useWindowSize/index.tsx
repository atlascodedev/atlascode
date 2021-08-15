import React from "react";

import {
  isBrowser,
  windowRemoveListener,
  windowAddListener,
} from "@atlascode/helpers";
import useRequestAnimationFrameState from "../useRequestAnimationFrameState";

const useWindowSize = (initialWidth = Infinity, initialHeight = Infinity) => {
  const [state, setState] = useRequestAnimationFrameState<{
    width: number;
    height: number;
  }>({
    height: isBrowser ? window.innerHeight : initialHeight,
    width: isBrowser ? window.innerWidth : initialWidth,
  });

  React.useEffect((): (() => void) | void => {
    if (isBrowser) {
      const handler = () => {
        setState({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      windowAddListener(window, "resize", handler);

      return () => {
        windowRemoveListener(window, "resize", handler);
      };
    }
  }, []);

  return state;
};

export default useWindowSize;
