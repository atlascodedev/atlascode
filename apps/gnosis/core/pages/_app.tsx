import * as React from 'react';
import { AppProps } from 'next/app';
import {
  AtlasCodeThemeProvider,
  ThemeSmoothScrollLayout,
} from '@atlascode/core';
import theme from '../theme/customTheme';
import AppLayout from '../layout/LandingPage.layout';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <AtlasCodeThemeProvider theme={theme}>
      <ThemeSmoothScrollLayout>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeSmoothScrollLayout>
    </AtlasCodeThemeProvider>
  );
}
