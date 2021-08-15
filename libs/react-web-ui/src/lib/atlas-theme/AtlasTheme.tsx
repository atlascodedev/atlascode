import {defaultTheme} from './defaultTheme'
import { Theme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { CacheProvider, Global, css } from '@emotion/react';
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
    return _.merge(defaultTheme, theme);
  }, [theme]);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={mergedThemeMemo}>
        <Global
          styles={css`
            html {
              font-size: 62.5%;
            }
          `}
        />
        {resetCSS && <CssBaseline />}
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AtlasCodeThemeProvider;
