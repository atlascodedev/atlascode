import * as React from 'react';
import { AppProps } from 'next/app';
import {
  AtlasCodeThemeProvider,
  GnosisLoader,
  ThemeSmoothScrollLayout,
} from '@atlascode/react-core';
import theme from '../theme/customTheme';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <AtlasCodeThemeProvider theme={theme}>
      <ThemeSmoothScrollLayout>
        <GnosisLoader />
        <Component {...pageProps} />
      </ThemeSmoothScrollLayout>
    </AtlasCodeThemeProvider>
  );
}
