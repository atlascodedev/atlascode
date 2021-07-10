import { createTheme, Theme, alpha, darken } from '@material-ui/core';

const outerTheme = createTheme({
  // palette: {
  //   primary: {
  //     main: 'hsla(224, 24%, 30%, 1)',
  //   },
  //   secondary: {
  //     main: 'hsla(11, 87%, 59%, 1)',
  //   },
  // },
});

const componentsTheme = (theme: Theme) => {
  return createTheme({
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'roundedOutline' },
            style: {
              padding: '5px 25px',
              textTransform: 'inherit',
              borderRadius: '15px',
              backgroundColor: 'transparent',
              color: theme.palette.primary.main,
              border: '1px solid',
              borderColor: theme.palette.primary.main,
              ':hover': {
                backgroundColor: alpha(theme.palette.primary.light, 0.1),
              },
            },
          },
          {
            props: { variant: 'roundedOutline', color: 'secondary' },
            style: {
              padding: '5px 25px',
              textTransform: 'inherit',
              borderRadius: '15px',
              backgroundColor: 'transparent',
              color: theme.palette.secondary.main,
              border: '1px solid',
              borderColor: theme.palette.secondary.main,
              ':hover': {
                backgroundColor: alpha(theme.palette.secondary.light, 0.1),
              },
            },
          },

          {
            props: { variant: 'rounded' },
            style: {
              padding: '5px 25px',
              textTransform: 'inherit',
              borderRadius: '15px',
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              ':hover': {
                backgroundColor: darken(theme.palette.primary.main, 0.2),
              },
              ':disabled': {
                backgroundColor: theme.palette.grey[200],
                color: theme.palette.grey[500],
                cursor: 'not-allowed',
              },
            },
          },
        ],
      },
    },
  });
};

export default createTheme(componentsTheme(outerTheme));
