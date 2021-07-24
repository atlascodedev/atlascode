import { ComponentsVariantSingle } from './theme-utilities';
import { darken, Theme } from '@material-ui/core';

export function withEvenBetterTheme<T extends keyof ComponentsVariantSingle>(
  theme: Theme,
  callback: (innerTheme: Theme) => ComponentsVariantSingle[T]
): ComponentsVariantSingle[T] {
  return callback(theme) as ComponentsVariantSingle[T];
}

export const roundedPrimary = (
  theme: Theme
): ComponentsVariantSingle['MuiButton'] => {
  return {
    props: {
      variant: 'rounded',
      color: 'primary',
    },
    style: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      borderRadius: '15px',
      px: '20px',
      py: '5px',
      textTransform: 'inherit',
      ':hover': {
        backgroundColor: darken(theme.palette.primary.main, 0.2),
      },
    },
  };
};

export const roundedSecondary = (
  theme: Theme
): ComponentsVariantSingle['MuiButton'] => {
  return {
    props: {
      variant: 'rounded',
      color: 'secondary',
    },
    style: {
      ...(roundedPrimary(theme) as Record<string, unknown>),
      color: theme.palette.primary.main,
      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette.primary.main}`,

      ':hover': {
        backgroundColor: theme.palette.grey[200],
      },
    },
  };
};

export const kotaPrimary = (
  theme: Theme
): Required<ComponentsVariantSingle['MuiButton']> => {
  return {
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
      fontSize: '1.5rem',
      borderRadius: '3rem',

      ':hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    },
  };
};

export const kotaSecondary = (
  theme: Theme
): ComponentsVariantSingle['MuiButton'] => {
  return {
    props: {
      variant: 'kota',
      color: 'secondary',
    },
    style: {
      ...(kotaPrimary(theme)?.style as Record<string, unknown>),
      color: theme.palette.secondary.main,
      border: `0.2rem solid ${theme.palette.secondary.main}`,

      ':hover': {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
      },
    },
  };
};

export const kotaInvertedPrimary = (
  theme: Theme
): ComponentsVariantSingle['MuiButton'] => {
  return {
    props: {
      variant: 'kotaInverted',
      color: 'primary',
    },
    style: {
      color: theme.palette.primary.contrastText,
      minWidth: '20rem',
      padding: '1.8rem 3.25rem',
      border: `0.2rem solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.primary.main,
      letterSpacing: '0.1rem',
      fontSize: '1.5rem',
      borderRadius: '3rem',

      ':hover': {
        backgroundColor: 'transparent',
        color: theme.palette.primary.main,
      },
    },
  };
};

export const kotaInvertedSecondary = (
  theme: Theme
): ComponentsVariantSingle['MuiButton'] => {
  return {
    props: {
      variant: 'kotaInverted',
      color: 'secondary',
    },
    style: {
      ...(kotaInvertedPrimary(theme).style as Record<string, unknown>),
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      border: `0.2rem solid ${theme.palette.secondary.main}`,

      ':hover': {
        color: theme.palette.secondary.main,
      },
    },
  };
};
