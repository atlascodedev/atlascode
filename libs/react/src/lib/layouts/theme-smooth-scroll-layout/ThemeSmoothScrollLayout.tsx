import { Box } from '@material-ui/core';
import React from 'react';
import { ScrollbarProvider } from '../../context/scrollbar-context/ScrollbarContext';

export interface ThemeSmoothScrollLayoutProps {
  children?: React.ReactNode;
}
/**
 * Wraps React's application entry point to  override default scroll and apply custom smooth scrollbar. This basically hijacks
 * the default scrollbar, so if one chooses to use this and wishes to control scrolling behavior, this can be achieved by using the provided hook (useScrollbarContext)
 *
 * It's recommended to pass this below the custom theme provider if one wishes for the scrollbar to be properly colored with theme's primary color
 */
export const ThemeSmoothScrollLayout = ({
  children,
  ...props
}: ThemeSmoothScrollLayoutProps) => {
  const mainContainerRef = React.useRef<HTMLElement>(null);

  return (
    <ScrollbarProvider wrapperRef={mainContainerRef}>
      <Box
        component="main"
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
            background: (theme) => theme.palette.primary.main,
          },
        }}
        ref={mainContainerRef}
      >
        {children}
      </Box>
    </ScrollbarProvider>
  );
};

export default ThemeSmoothScrollLayout;
