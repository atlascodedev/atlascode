import { Box } from '@material-ui/core';
import React from 'react';
import { ScrollbarProvider } from '../../context/scrollbar-context/ScrollbarContext';
import AtlasCodeThemeProvider, {
  AtlasCodeThemeProviderProps,
} from '../../utility/atlas-theme-provider/AtlasThemeProvider';

export interface ThemeSmoothScrollLayoutProps
  extends AtlasCodeThemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeSmoothScrollLayout = ({
  children,
  ...props
}: ThemeSmoothScrollLayoutProps) => {
  const mainContainerRef = React.useRef<HTMLElement>(null);

  return (
    <AtlasCodeThemeProvider resetCSS={props.resetCSS} theme={props.theme}>
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
    </AtlasCodeThemeProvider>
  );
};

export default ThemeSmoothScrollLayout;
