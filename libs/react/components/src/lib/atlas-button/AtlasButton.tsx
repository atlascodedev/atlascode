import { Button, ButtonProps, Box, styled } from '@material-ui/core';
import { alpha } from '@material-ui/system';
import { AtlasCSSVariant } from '../atlas-theme-provider/theme-utilities';
import React from 'react';
import { ThemeProvider } from '@storybook/theming';

export type RoundedButtonProps = Omit<
  ButtonProps,
  'variant' | 'color' | 'children'
>;

const AtlasButtonTest = styled(Button)({});

/* eslint-disable-next-line */
export interface AtlasButtonProps extends RoundedButtonProps {
  color?: 'primary' | 'secondary';
  variant?: 'outlined' | 'contained';
  children?: React.ReactNode;
}

export function AtlasButton({
  color = 'primary',
  variant = 'contained',
  children,
  disableElevation = false,
  ...props
}: AtlasButtonProps) {
  const variants: Record<typeof variant, AtlasCSSVariant> = {
    contained: {
      backgroundColor: (theme) => theme.palette[color].main,
      color: (theme) => theme.palette[color].contrastText,
    },
    outlined: {
      backgroundColor: 'transparent',
      color: (theme) => theme.palette[color].main,
      borderColor: (theme) =>
        props.disabled ? 'transparent' : theme.palette[color].main,
      border: '1px solid',
    },
  };

  return (
    <Box
      {...props}
      component={Button}
      sx={{
        transition: 'all 0.2s ease',
        borderRadius: '15px',
        px: '15px',
        textTransform: 'inherit',
        ...variants[variant],
        boxShadow: (theme) =>
          disableElevation || variant === 'outlined'
            ? theme.shadows[0]
            : theme.shadows[3],
        ':hover': {
          backgroundColor: (theme) =>
            variant === 'outlined'
              ? alpha(theme.palette.primary.light, 0.1)
              : `${color}.light`,
          color:
            variant === 'outlined' ? `${color}.main` : `${color}.contrastText`,
          boxShadow: (theme) =>
            disableElevation || variant === 'outlined'
              ? theme.shadows[0]
              : theme.shadows[1],
        },
        ':disabled': {
          backgroundColor: (theme) => theme.palette.grey[200],
          color: (theme) => theme.palette.grey[500],
          boxShadow: (theme) => theme.shadows[0],
          cursor: 'not-allowed',
        },
      }}
    >
      {children}
    </Box>
  );
}

export default AtlasButton;
