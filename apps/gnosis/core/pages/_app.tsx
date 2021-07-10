import * as React from 'react';
import { AppProps } from 'next/app';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { AtlasCodeThemeProvider } from '@atlascode/react-components';

const cache = createCache({ key: 'css', prepend: true });
cache.compat = true;

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <CacheProvider value={cache}>
      <AtlasCodeThemeProvider>
        <Component {...pageProps} />
      </AtlasCodeThemeProvider>
    </CacheProvider>
  );
}
