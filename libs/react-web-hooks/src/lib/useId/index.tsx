import React from "react";

export const useId = (idOveride?: string): string | undefined => {
  const [defaultId, setDefaultId] = React.useState(idOveride);

  const id = idOveride || defaultId;

  React.useEffect(() => {
    if (defaultId == null) {
      setDefaultId(`atlas-${Math.round(Math.random() * 1e9)}`);
    }
  }, [defaultId]);

  return id;
};

export default useId;
