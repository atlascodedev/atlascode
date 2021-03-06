import {
  alpha,
  Box,
  BoxProps,
  Button,
  ButtonProps,
  darken,
  Theme,
} from '@material-ui/core';
import { SxProps } from '@material-ui/system';
import _ from 'lodash';
import React from 'react';

type AtlasButtonVariants =
  | 'rounded'
  | 'rounded-outlined'
  | 'kota'
  | 'kota-inverted';

const customVariantsList: AtlasButtonVariants[] = [
  'kota',
  'kota-inverted',
  'rounded',
  'rounded-outlined',
];

type AtlasButtonColor = 'primary' | 'secondary';

type MuiButtonProps = Omit<ButtonProps, 'variant' | 'color'>;

export interface AtlasButtonProps extends MuiButtonProps {
  variant: AtlasButtonVariants | ButtonProps['variant'];
  color?: AtlasButtonColor;
}

export const AtlasButton = ({
  variant = 'rounded',
  color = 'primary',
  ...rest
}: AtlasButtonProps) => {
  if (_.includes(customVariantsList, variant)) {
    return (
      <Box
        sx={{
          ...atlasButtonMapWithColor(color)[variant as AtlasButtonVariants],
        }}
        component={Button}
        {...rest}
      />
    );
  } else {
    return (
      <Button
        variant={variant as ButtonProps['variant']}
        color={color}
        {...rest}
      />
    );
  }
};

export default AtlasButton;

const customVariantsBaseStyles = {
  fontSize: '0.875rem',
  textTransform: 'inherit',
} as SxProps<Theme>;

const roundedVariant = (color: AtlasButtonColor): BoxProps['sx'] => {
  return {
    ...customVariantsBaseStyles,
    color: (theme) => theme.palette[color].contrastText,
    backgroundColor: (theme) => theme.palette[color].main,
    borderRadius: '15px',
    px: '2.5em',
    ':hover': {
      backgroundColor: (theme) => darken(theme.palette[color].main, 0.2),
    },
  };
};

const roundedOutlinedVariant = (color: AtlasButtonColor): BoxProps['sx'] => {
  return {
    ...customVariantsBaseStyles,
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
    ...customVariantsBaseStyles,
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: '0.675rem',
    color: (theme) => theme.palette[color].main,
    minWidth: '20em',
    padding: '1.8em 3.25em',
    border: (theme) => `0.2em solid ${theme.palette[color].main}`,
    background: 'transparent',
    letterSpacing: '0.1em',
    borderRadius: '3em',
    ':hover': {
      backgroundColor: (theme) => theme.palette[color].main,
      color: (theme) => theme.palette[color].contrastText,
    },
  };
};

const kotaInvertedVariant = (color: AtlasButtonColor): BoxProps['sx'] => {
  return {
    ...customVariantsBaseStyles,
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
