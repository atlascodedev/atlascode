import React from 'react';

const useIsInitialRender = () => {
  const initial = React.useRef(true);

  React.useEffect(() => {
    initial.current = false;
  }, []);

  return initial.current;
};

export default useIsInitialRender;
