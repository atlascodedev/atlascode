import { isBrowser } from '@atlascode/helpers';
import React from 'react';
import { Scrollbar as IScrollbar } from 'smooth-scrollbar/scrollbar';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import ScrollbarModalPlugin from '../../components/smooth-scroll-wrapper/SmoothScrollModalPlugin';

export type SmoothScrollHook = (
  ref: React.RefObject<HTMLElement>,
  options?: IScrollbar['options']
) => ReturnType<typeof useSmoothScrollbar>;

export const useSmoothScrollbar = (
  ref: React.RefObject<HTMLElement>,
  options?: IScrollbar['options']
) => {
  const scrollbarRef = React.useRef<IScrollbar>();

  React.useEffect(() => {
    if (isBrowser) {
      Scrollbar.use(OverscrollPlugin, ScrollbarModalPlugin);

      scrollbarRef.current = Scrollbar.init(ref.current as HTMLElement, {
        ...defaultOptions,
        ...options,
      });
    }
  }, [ref, options]);

  const disableScroll = React.useCallback(() => {
    scrollbarRef.current?.updatePluginOptions('modal', { open: true });
  }, []);

  const enableScroll = React.useCallback(() => {
    scrollbarRef.current?.updatePluginOptions('modal', { open: false });
  }, []);

  return {
    scrollbarInstance: scrollbarRef.current,
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
