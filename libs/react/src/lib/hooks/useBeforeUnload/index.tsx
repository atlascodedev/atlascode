import React from "react";

const useBeforeUnload = (handler: (...args: any[]) => void) => {
  const callback = React.useRef(handler);

  React.useEffect(() => {
    const onUnload = callback.current;

    window.addEventListener("beforeunload", onUnload);

    return () => {
      window.removeEventListener("beforeunload", onUnload);
    };
  }, [callback]);
};

export default useBeforeUnload;
