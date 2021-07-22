/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Fab } from '@material-ui/core';

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
