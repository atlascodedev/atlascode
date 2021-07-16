import ScrollBar from 'smooth-scrollbar';
import React from 'react';
import { Scrollbar } from 'smooth-scrollbar/scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import { isBrowser } from '@atlascode/helpers';
import { Box } from '@material-ui/core';
import ScrollbarModalPlugin from './SmoothScrollModalPlugin';

/* eslint-disable-next-line */
export interface SmoothScrollWrapperProps {
  children?: React.ReactNode;
  damping?: number;
}

export function SmoothScrollWrapper({
  children,
  damping = 0.1,
}: SmoothScrollWrapperProps) {
  const scrollbarInitializerRef = React.useRef<Scrollbar>();
  const wrapperRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (isBrowser) {
      ScrollBar.use(OverscrollPlugin, ScrollbarModalPlugin);

      scrollbarInitializerRef.current = ScrollBar.init(
        wrapperRef.current as HTMLElement,
        defaultOptions
      );
    }
  }, []);

  React.useEffect(() => {
    if (damping > 1 || damping < 0) {
      throw new Error(' "damping" must be a value between 0 and 1');
    }

    if (
      scrollbarInitializerRef.current &&
      scrollbarInitializerRef.current.options.damping
    ) {
      scrollbarInitializerRef.current.options.damping = damping;
    }
  }, [damping]);

  return (
    <Box
      component={'main'}
      ref={wrapperRef}
      tabIndex={-1}
      style={{
        overflow: 'hidden',
        outline: 'none',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      sx={{
        '.scrollbar-track .scrollbar-thumb': {
          background: (theme) => theme.palette.secondary.main,
        },
      }}
    >
      {children}
    </Box>
  );
}

export default SmoothScrollWrapper;

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
