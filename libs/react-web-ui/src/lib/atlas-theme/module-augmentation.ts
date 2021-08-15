/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Button,
  Fab,
  ThemeOptions,
  Theme,
  createTheme,
  Menu,
} from '@material-ui/core';

declare module '@material-ui/core/styles/createTheme' {
  export interface Theme {
    customShadow?: {
      light?: string;
    };
  }

  export interface ThemeOptions {
    customShadow?: {
      light?: string;
    };
  }
}
