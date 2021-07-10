import React from 'react';
import { Button, ButtonProps, Box } from '@material-ui/core';
import { alpha, darken } from '@material-ui/system';
import { AtlasCSSVariant } from '../atlas-theme-provider/theme-utilities';

export type RoundedButtonProps = Omit<
  ButtonProps,
  'variant' | 'color' | 'children'
>;

/* eslint-disable-next-line */
export interface AtlasButtonProps extends RoundedButtonProps {
  color?: 'primary' | 'secondary';
  variant?: 'outlined' | 'contained';
  compact?: boolean;
  children?: React.ReactNode;
}

export function AtlasButton({
  color = 'primary',
  variant = 'contained',
  children,
  disableElevation = false,
  compact = false,
  ...props
}: AtlasButtonProps) {
  const variantMemo = React.useMemo(() => {
    return () => {
      return {
        contained: {
          backgroundColor: (theme) => theme.palette[color].main,
          color: (theme) => theme.palette[color].contrastText,
          boxShadow: (theme) =>
            disableElevation ? theme.shadows[0] : theme.shadows[3],
          ':hover': {
            backgroundColor: (theme) => darken(theme.palette[color].main, 0.2),
            boxShadow: (theme) => theme.shadows[0],
          },
        },
        outlined: {
          backgroundColor: 'transparent',
          color: (theme) => theme.palette[color].main,
          borderColor: (theme) =>
            props.disabled ? 'transparent' : theme.palette[color].main,
          border: '1px solid',
          ':hover': {
            backgroundColor: (theme) => alpha(theme.palette[color].light, 0.1),
          },
        },
      } as Record<typeof variant, AtlasCSSVariant>;
    };
  }, [color, props.disabled, disableElevation]);

  return (
    <Box
      {...props}
      component={Button}
      sx={{
        transition: 'all 0.5s ease',
        borderRadius: '15px',
        px: '20px',
        py: !compact ? '5px' : '1px',
        textTransform: 'inherit',
        ...variantMemo()[variant],
        ':disabled': {
          backgroundColor: (theme) => theme.palette.grey[200],
          color: (theme) => theme.palette.grey[500],
          boxShadow: (theme) => theme.shadows[0],
          cursor: 'not-allowed',
        },
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
}

export default AtlasButton;
