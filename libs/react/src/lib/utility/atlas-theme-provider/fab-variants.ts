import { Theme } from '@material-ui/core';
import { ComponentsVariantSingle } from './theme-utilities';

export const fabOutlinedPrimary = (
  theme: Theme
): ComponentsVariantSingle['MuiFab'] => {
  return {
    props: {
      variant: 'outlined',
      color: 'primary',
    },
    style: {
      color: theme.palette.primary.main,
      backgroundColor: 'transparent',
      border: `0.2rem solid ${theme.palette.primary.main}`,
      boxShadow: theme.shadows[0],

      ':hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    },
  };
};

export const fabOutlinedSecondary = (
  theme: Theme
): ComponentsVariantSingle['MuiFab'] => {
  return {
    props: {
      variant: 'outlined',
      color: 'secondary',
    },
    style: {
      color: theme.palette.secondary.main,
      backgroundColor: 'transparent',
      border: `0.2rem solid ${theme.palette.secondary.main}`,
      boxShadow: theme.shadows[0],

      ':hover': {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.main,
      },
    },
  };
};
