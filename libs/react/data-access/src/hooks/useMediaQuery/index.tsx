import React from "react";
import { isBrowser } from "@atlascode/helpers";

const useMediaQuery = (
  query: string,
  defaultState: boolean = false
): boolean => {
  const [state, setState] = React.useState<boolean>(
    isBrowser ? () => window.matchMedia(query).matches : defaultState
  );

  React.useEffect(() => {
    let isMounted = true;

    const mediaQuery = window.matchMedia(query);

    const onChange = () => {
      if (!isMounted) {
        return;
      }

      setState(!!mediaQuery.matches);
    };

    mediaQuery.addListener(onChange);

    setState(mediaQuery.matches);
  }, [query]);

  return state;
};

export default useMediaQuery;
