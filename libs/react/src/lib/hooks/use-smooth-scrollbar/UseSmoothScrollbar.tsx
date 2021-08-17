import React from 'react';
import { Scrollbar as IScrollbar } from 'smooth-scrollbar/scrollbar';
import Scrollbar from 'smooth-scrollbar';
import ScrollbarModalPlugin from '../../utility/smooth-scroll-wrapper/SmoothScrollModalPlugin';
import { isString } from 'lodash';

export type SmoothScrollHook = (
  ref: React.RefObject<HTMLElement>,
  options?: IScrollbar['options']
) => ReturnType<typeof useSmoothScrollbar>;

export const useSmoothScrollbar = (
  ref: React.RefObject<HTMLElement>,
  options?: IScrollbar['options']
) => {
  const [scrollbarInstance, setScrollbarInstance] =
    React.useState<IScrollbar>();

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      Scrollbar.use(ScrollbarModalPlugin);

      setScrollbarInstance(
        Scrollbar.init(ref.current as HTMLElement, {
          ...defaultOptions,
          ...options,
        })
      );
    }

    return () => {
      scrollbarInstance?.destroy();
    };
  }, [scrollbarInstance, options, ref]);

  const disableScroll = React.useCallback(() => {
    scrollbarInstance?.updatePluginOptions('modal', { open: true });
  }, [scrollbarInstance]);

  const enableScroll = React.useCallback(() => {
    scrollbarInstance?.updatePluginOptions('modal', { open: false });
  }, [scrollbarInstance]);

  const scrollIntoView = React.useCallback(
    (ref: React.RefObject<HTMLElement> | string) => {
      if (isString(ref)) {
        const elementReference = document.querySelector(ref);

        scrollbarInstance?.scrollIntoView(elementReference as HTMLElement);
      } else {
        scrollbarInstance?.scrollIntoView(ref.current as HTMLElement);
      }
    },
    [scrollbarInstance]
  );

  const scrollTop = React.useCallback(
    (duration = 1000) => {
      scrollbarInstance?.scrollTo(0, 0, duration);
    },
    [scrollbarInstance]
  );

  return {
    scrollbarInstance: scrollbarInstance,
    disableScroll: disableScroll,
    enableScroll: enableScroll,
    scrollIntoView: scrollIntoView,
    scrollTop: scrollTop,
  };
};

const overscrollOptions = {
  enable: true,
  effect:
    typeof window !== 'undefined' && !navigator.userAgent.match(/Android/)
      ? 'glow'
      : 'bounce',
  damping: 0.2,
  maxOverscroll: 150,
  glowColor: '#222a2d',
};

// # TODO - Fix overscroll plugin issues with NextJS
const defaultOptions: Partial<Scrollbar['options']> = {
  renderByPixels: true,
  continuousScrolling: true,
  alwaysShowTracks: false,
  damping: 0.1,
  // plugins: {
  //   overscroll: { ...overscrollOptions },
  // },
};
