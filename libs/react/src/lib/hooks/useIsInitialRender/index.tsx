import React from "react";

const isInitialRender = () => {
  let initial = React.useRef(true);

  React.useEffect(() => {
    initial.current = false;
  }, []);

  return initial.current;
};

export default isInitialRender;
