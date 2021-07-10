import React from "react";

const useIsMounted = () => {
  let mounted = React.useRef(false);

  React.useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  return mounted;
};

export default useIsMounted;
