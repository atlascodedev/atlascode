import { createTheme, colors, ThemeOptions } from '@material-ui/core';
import _ from 'lodash';
import { getPaletteColor } from './theme-utilities';

console.log(getPaletteColor('primary', 'main'));

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: '#333',
    },
  },
};

const themeComponents: ThemeOptions['components'] = {
  MuiButton: {
    variants: [
      {
        props: {
          variant: 'rounded',
        },
        style: {
          borderRadius: '10px',
          // backgroundColor: _.get(defaultThemePalette, 'primary.main'),
          // color: _.get(defaultThemePalette, 'primary.contrastText'),
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
};

theme.components = themeComponents;

export default createTheme(theme);
