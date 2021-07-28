import React from 'react';

const useIseInitialRender = () => {
  const initial = React.useRef(true);

  React.useEffect(() => {
    initial.current = false;
  }, []);

  return initial.current;
};

export default useIseInitialRender;
