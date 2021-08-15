import React from "react";
import { scrollbarWidth } from "@xobotyi/scrollbar-width";

const useScrollbarWidth = (): number | undefined => {
  const [scrollbarWidthState, setScrollbarWidthState] = React.useState(
    scrollbarWidth()
  );

  React.useEffect(() => {
    if (typeof scrollbarWidthState === "undefined") {
      return;
    }

    const requestAnimationFrameHandler = requestAnimationFrame(() => {
      setScrollbarWidthState(scrollbarWidth());
    });

    return () => {
      cancelAnimationFrame(requestAnimationFrameHandler);
    };
  }, []);

  return scrollbarWidthState;
};

export default useScrollbarWidth;
