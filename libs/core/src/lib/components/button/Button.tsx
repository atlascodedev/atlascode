import {
  alpha,
  Box,
  BoxProps,
  Button,
  ButtonProps,
  darken,
  Theme,
} from '@material-ui/core';
import React from 'react';

type AtlasButtonVariants =
  | 'rounded'
  | 'rounded-outlined'
  | 'kota'
  | 'kota-inverted';

type AtlasButtonColor = 'primary' | 'secondary';

type MuiButtonProps = Omit<ButtonProps, 'variant' | 'color'>;

export interface AtlasButtonProps extends MuiButtonProps {
  variant: AtlasButtonVariants;
  color?: AtlasButtonColor;
}

export const AtlasButton = ({
  variant = 'rounded',
  color = 'primary',
  ...rest
}: AtlasButtonProps) => {
  return (
    <Box
      sx={{ ...atlasButtonMapWithColor(color)[variant] }}
      component={Button}
      {...rest}
    />
  );
};

export default AtlasButton;

const roundedVariant = (color: AtlasButtonColor): BoxProps['sx'] => {
  return {
    color: (theme) => theme.palette[color].contrastText,
    backgroundColor: (theme) => theme.palette[color].main,
    borderRadius: '15px',
    textTransform: 'inherit',
    ':hover': {
      backgroundColor: (theme) => darken(theme.palette[color].main, 0.2),
    },
  };
};

const roundedOutlinedVariant = (color: AtlasButtonColor): BoxProps['sx'] => {
  return {
    ...roundedVariant(color),
    color: (theme) => theme.palette[color].main,
    backgroundColor: 'transparent',
    border: (theme) => `1px solid ${theme.palette[color].main}`,

    ':hover': {
      backgroundColor: (theme) => alpha(theme.palette[color].main, 0.05),
    },
  };
};

const kotaVariant = (color: AtlasButtonColor): BoxProps['sx'] => {
  return {
    color: (theme) => theme.palette[color].main,
    minWidth: '20em',
    padding: '1.8em 3.25em',
    border: (theme) => `0.2em solid ${theme.palette[color].main}`,
    background: 'transparent',
    letterSpacing: '0.1em',
    fontSize: '1rem',
    borderRadius: '3em',
    ':hover': {
      backgroundColor: (theme) => theme.palette[color].main,
      color: (theme) => theme.palette[color].contrastText,
    },
  };
};

const kotaInvertedVariant = (color: AtlasButtonColor): BoxProps['sx'] => {
  return {
    ...kotaVariant(color),
    color: (theme) => theme.palette[color].contrastText,
    backgroundColor: (theme) => theme.palette[color].main,

    ':hover': {
      backgroundColor: 'transparent',
      color: (theme) => theme.palette[color].main,
    },
  };
};

const atlasButtonMapWithColor = (
  color: AtlasButtonColor
): Record<AtlasButtonVariants, BoxProps['sx']> => {
  return {
    'kota-inverted': kotaInvertedVariant(color),
    kota: kotaVariant(color),
    'rounded-outlined': roundedOutlinedVariant(color),
    rounded: roundedVariant(color),
  };
};
