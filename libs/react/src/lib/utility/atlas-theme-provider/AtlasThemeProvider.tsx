import defaultTheme from './theme';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AtlasCodeThemeProviderProps {
  resetCSS?: boolean;
}

const cache = createCache({ key: 'css', prepend: true });
cache.compat = true;

export const AtlasCodeThemeProvider: React.FC<AtlasCodeThemeProviderProps> = ({
  children,
  resetCSS = true,
}) => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={defaultTheme}>
        {resetCSS && <CssBaseline />}
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AtlasCodeThemeProvider;
