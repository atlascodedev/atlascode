import { createTheme, getButtonBaseUtilityClass } from '@material-ui/core';
import { createTheme as createSystemTheme } from '@material-ui/system';
import _ from 'lodash';

export const customTheme = createSystemTheme({
  components: {
    AtlasButton: {
      style: {
        hello: 'ok',
      },
      props: {},
    },
  },
});

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#283046',
    },
    secondary: {
      main: '#F15D3C',
    },
  },
  customShadow: {
    light: '0px 4.01194px 4.01194px rgba(0, 0, 0, 0.1)',
  },
  components: {},
});

const systemThemeWithMuiDefaults = _.merge(customTheme, defaultTheme);

console.log(systemThemeWithMuiDefaults);
