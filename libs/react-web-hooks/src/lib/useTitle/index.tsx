import React from "react";

export interface UseTitleOptions {
  restoreOnMount?: boolean;
}

const DEFAULT_USE_TITLE_OPTIONS: UseTitleOptions = {
  restoreOnMount: false,
};

const useTitle = (
  title: string,
  options: UseTitleOptions = DEFAULT_USE_TITLE_OPTIONS
): void => {
  const prevTitle = React.useRef(document?.title);

  document.title = title;

  React.useEffect(() => {
    if (options && options.restoreOnMount) {
      return () => {
        document.title = prevTitle.current;
      };
    } else {
      return;
    }
  }, []);
};

export default typeof document !== "undefined"
  ? useTitle
  : (_title: string) => {};
