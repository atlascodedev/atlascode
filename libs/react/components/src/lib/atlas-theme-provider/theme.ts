import { createTheme, colors, ThemeOptions } from '@material-ui/core';

const theme: ThemeOptions = {
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'rounded' },
          style: {
            borderRadius: '50%',
            backgroundColor: 'red',
          },
        },

        {
          props: { variant: 'dashed' },
          style: {
            textTransform: 'none',
            border: '2px dashed gray',
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            border: `4px dashed ${colors.red[500]}`,
          },
        },
      ],
    },
  },
};

export default createTheme(theme);

declare module '@material-ui/core/Button' {
  export interface ButtonPropsVariantOverrides {
    dashed: true;
    rounded: true;
  }
}
