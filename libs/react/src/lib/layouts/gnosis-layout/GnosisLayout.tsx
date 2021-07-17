import { Box } from '@material-ui/core';
import React from 'react';
import { ScrollbarProvider } from '../../context/scrollbar-context/ScrollbarContext';
import AtlasCodeThemeProvider from '../../utility/atlas-theme-provider/AtlasThemeProvider';
import gnosisTheme from './theme';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GnosisLayoutProps {}

const GnosisLayout: React.FC<GnosisLayoutProps> = ({ children }) => {
  const mainContainerRef = React.useRef<HTMLElement>(null);

  return (
    <AtlasCodeThemeProvider theme={gnosisTheme}>
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
              background: (theme) => theme.palette.secondary.main,
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

export default GnosisLayout;
