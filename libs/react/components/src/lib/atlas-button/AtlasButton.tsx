import { Button, ButtonProps, Box } from '@material-ui/core';
import { SystemCssProperties, Theme, alpha } from '@material-ui/system';

export type RoundedButtonProps = Omit<
  ButtonProps,
  'variant' | 'color' | 'children'
>;

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
  return (
    <Box
      {...props}
      component={Button}
      sx={{
        transition: 'all 0.2s ease',
        borderRadius: '15px',
        px: '15px',
        textTransform: 'inherit',
        backgroundColor:
          variant === 'contained' ? `${color}.main` : 'transparent',
        color:
          variant === 'contained' ? `${color}.contrastText` : `${color}.main`,
        border: variant === 'outlined' ? `1px solid` : 'none',
        borderColor:
          variant === 'outlined' && !props.disabled
            ? `${color}.main`
            : 'transparent',
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
