import defaultTheme from './theme';
import {
  Theme,
  ThemeProvider,
  CssBaseline,
  createTheme,
} from '@material-ui/core';
import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import _ from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AtlasCodeThemeProviderProps {
  resetCSS?: boolean;
  theme?: Theme;
}

const cache = createCache({ key: 'css', prepend: true });
cache.compat = true;

export const AtlasCodeThemeProvider: React.FC<AtlasCodeThemeProviderProps> = ({
  children,
  resetCSS = true,
  theme,
}) => {
  const mergeThemeRef = React.useMemo(() => {
    const mergeDeep = _.merge(defaultTheme, theme);

    return createTheme(mergeDeep);
  }, [theme]);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={mergeThemeRef}>
        {resetCSS && <CssBaseline />}
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AtlasCodeThemeProvider;
