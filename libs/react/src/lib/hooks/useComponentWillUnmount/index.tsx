import React from "react";

const useComponentWillUnmount = (
  onUnmountHandler: (...args: any[]) => void
) => {
  React.useEffect(
    () => () => {
      onUnmountHandler();
    },
    []
  );
};

export default useComponentWillUnmount;
