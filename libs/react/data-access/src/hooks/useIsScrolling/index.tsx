import React from 'react';
import {
  noOperation,
  windowAddListener,
  windowRemoveListener,
} from '@atlascode/helpers';

const useIsScrolling = (ref: React.RefObject<HTMLElement>): boolean => {
  const [scrolling, setScrolling] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (ref.current) {
      let scrollingTimeout: unknown;

      const handleScrollEnd = () => {
        setScrolling(false);
      };

      const handleScroll = () => {
        setScrolling(true);
        clearTimeout(scrollingTimeout as NodeJS.Timeout);
        scrollingTimeout = setTimeout(() => handleScrollEnd(), 150);
      };

      windowAddListener(ref.current, 'scroll', handleScroll, false);
      return () => {
        if (ref.current) {
          windowRemoveListener(ref.current, 'scroll', handleScroll, false);
        }
      };
    }
    return () => noOperation();
  }, [ref]);

  return scrolling;
};

export default useIsScrolling;
