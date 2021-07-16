import { isBrowser } from '@atlascode/helpers';
import React from 'react';
import { Scrollbar as IScrollbar } from 'smooth-scrollbar/scrollbar';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import ScrollbarModalPlugin from '../../utility/smooth-scroll-wrapper/SmoothScrollModalPlugin';

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
    if (isBrowser) {
      Scrollbar.use(OverscrollPlugin, ScrollbarModalPlugin);

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

  return {
    scrollbarInstance: scrollbarInstance,
    disableScroll: disableScroll,
    enableScroll: enableScroll,
  };
};

const overscrollOptions = {
  enable: true,
  effect: !navigator.userAgent.match(/Android/) ? 'glow' : 'bounce',
  damping: 0.2,
  maxOverscroll: 150,
  glowColor: '#222a2d',
};

const defaultOptions: Partial<Scrollbar['options']> = {
  renderByPixels: true,
  continuousScrolling: true,
  alwaysShowTracks: false,
  damping: 0.1,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};
