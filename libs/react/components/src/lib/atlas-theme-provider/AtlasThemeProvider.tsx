import themeColors from './theme';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AtlasCodeThemeProviderProps {}

export const AtlasCodeThemeProvider: React.FC<AtlasCodeThemeProviderProps> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={themeColors}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AtlasCodeThemeProvider;
