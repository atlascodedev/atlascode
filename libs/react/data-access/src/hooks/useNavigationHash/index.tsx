import React from "react";
import { windowAddListener, windowRemoveListener } from "@atlascode/helpers";

export const useNavigationHash = () => {
  const [hash, setHash] = React.useState(() => window.location.hash);

  const onHashChange = React.useCallback(() => {
    setHash(window.location.hash);
  }, []);

  React.useEffect(() => {
    windowAddListener(window, "hashchange", onHashChange);

    return () => {
      windowRemoveListener(window, "hashchange", onHashChange);
    };
  }, []);

  const _setHash = React.useCallback(
    (newHash: string) => {
      if (newHash !== hash) {
        window.location.hash = newHash;
      }
    },
    [hash]
  );

  return [hash, _setHash] as const;
};

export default useNavigationHash;
