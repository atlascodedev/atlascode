import * as React from 'react';
import { AppProps } from 'next/app';
import { AtlasCodeThemeProvider } from '@atlascode/react-components';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AtlasCodeThemeProvider>
      <Component {...pageProps} />
    </AtlasCodeThemeProvider>
  );
}
