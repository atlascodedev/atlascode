import React from "react";

const useToggle = (initialState: boolean = false) => {
  const [state, setState] = React.useState<boolean>(initialState);

  const toggle = React.useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

export default useToggle;
