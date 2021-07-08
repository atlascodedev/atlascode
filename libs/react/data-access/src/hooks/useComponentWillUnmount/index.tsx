import React from 'react';

const useComponentWillUnmount = (
  onUnmountHandler: (...args: unknown[]) => void
) => {
  React.useEffect(
    () => () => {
      onUnmountHandler();
    },
    []
  );
};

export default useComponentWillUnmount;
