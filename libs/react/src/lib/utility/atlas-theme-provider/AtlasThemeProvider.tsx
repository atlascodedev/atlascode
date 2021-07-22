import defaultTheme, { componentsTheme } from './theme';
import { Theme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
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
  const mergedThemeMemo = React.useMemo(() => {
    const mergeDeepLocal = _.merge(defaultTheme, theme);
    const injectComponentVariants = componentsTheme(mergeDeepLocal);
    return _.merge(injectComponentVariants, mergeDeepLocal);
  }, [theme]);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={mergedThemeMemo}>
        {resetCSS && <CssBaseline />}
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AtlasCodeThemeProvider;
