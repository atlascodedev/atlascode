import ScrollBar from 'smooth-scrollbar';
import React from 'react';
import { Scrollbar } from 'smooth-scrollbar/scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import { isBrowser } from '@atlascode/helpers';

/* eslint-disable-next-line */
export interface SmoothScrollWrapperProps {
  children?: React.ReactNode;
  damping?: number;
}

const overscrollOptions = {
  enable: true,
  effect: !navigator.userAgent.match(/Android/) ? 'glow' : 'bounce',
  damping: 0.2,
  maxOverscroll: 150,
  glowColor: '#222a2d',
};

export function SmoothScrollWrapper({
  children,
  damping = 0.1,
}: SmoothScrollWrapperProps) {
  const scrollbarInitializerRef = React.useRef<Scrollbar>();
  const wrapperRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (isBrowser) {
      ScrollBar.use(OverscrollPlugin);

      scrollbarInitializerRef.current = ScrollBar.init(
        wrapperRef.current as HTMLElement,
        {
          renderByPixels: true,
          continuousScrolling: true,
          alwaysShowTracks: false,
          damping: 0.1,
          plugins: {
            overscroll: { ...overscrollOptions },
          },
        }
      );
    }

    console.log(scrollbarInitializerRef.current?.containerEl);
  }, []);

  React.useEffect(() => {
    if (
      scrollbarInitializerRef.current &&
      scrollbarInitializerRef.current.options.damping
    ) {
      scrollbarInitializerRef.current.options.damping = damping;
    }
  }, [damping]);

  return (
    <main
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
    >
      {children}
    </main>
  );
}

export default SmoothScrollWrapper;
