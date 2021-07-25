import * as React from 'react';
import { AppProps } from 'next/app';
import { AtlasCodeThemeProvider } from '@atlascode/react-core';
import theme from '../theme/customTheme';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AtlasCodeThemeProvider theme={theme}>
      <Component {...pageProps} />
    </AtlasCodeThemeProvider>
  );
}
