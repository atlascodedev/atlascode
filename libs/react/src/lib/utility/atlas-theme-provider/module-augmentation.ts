/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Fab, ThemeOptions } from '@material-ui/core';

declare module '@material-ui/core/Button' {
  export interface ButtonPropsVariantOverrides {
    dashed: true;
    rounded: true;
    roundedOutline: true;
    kota: true;
    kotaInverted: true;
  }
}

declare module '@material-ui/core/Fab' {
  export interface FabPropsVariantOverrides {
    outlined: true;
  }
}

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
