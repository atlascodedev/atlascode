import { createTheme, responsiveFontSizes, Theme } from '@material-ui/core';

const outerTheme = createTheme({
  palette: {
    primary: {
      main: '#283047',
    },
    secondary: {
      main: '#F15D3C',
    },
  },
});

const componentsTheme = (theme: Theme) => {
  return createTheme({
    ...theme,
    typography: {
      htmlFontSize: 10,
    },
    components: {
      MuiButton: {
        variants: [],
      },
    },
  });
};

export default responsiveFontSizes(componentsTheme(outerTheme));
