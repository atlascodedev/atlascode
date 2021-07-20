import { createTheme, Theme } from '@material-ui/core';

export const outerTheme = createTheme({
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
        variants: [
          {
            props: {
              variant: 'kota',
              color: 'primary',
            },
            style: {
              color: theme.palette.primary.main,
              minWidth: '20rem',
              padding: '1.8rem 3.25rem',
              border: `0.2rem solid ${theme.palette.primary.main}`,
              background: 'transparent',
              letterSpacing: '0.1rem',
              fontsize: '1.2rem',
              borderRadius: '3rem',

              ':hover': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              },
            },
          },
        ],
      },
    },
  });
};

export default componentsTheme(outerTheme);
