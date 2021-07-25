import {
  Box,
  Button,
  ButtonProps,
  OutlinedTextFieldProps,
  TextField,
} from '@material-ui/core';
import useMeasure from '../../hooks/useMeasure';
import React from 'react';

type NewsLetterInputTextFieldProps = Pick<
  OutlinedTextFieldProps,
  | 'onChange'
  | 'value'
  | 'defaultValue'
  | 'error'
  | 'helperText'
  | 'placeholder'
  | 'size'
>;

type NewsLetterInputButtonProps = Pick<ButtonProps, 'disabled' | 'onClick'>;

/* eslint-disable-next-line */
export interface NewsLetterInputProps
  extends NewsLetterInputTextFieldProps,
    NewsLetterInputButtonProps {
  color?: 'primary' | 'secondary';
  inputDisabled?: boolean;
  buttonLabel?: string;
  minWidth?: string;
}

export function NewsLetterInput({
  color = 'primary',
  defaultValue,
  disabled,
  error,
  helperText,
  onChange,
  onClick,
  inputDisabled,
  placeholder,
  value,
  buttonLabel,
  size = 'small',
  minWidth,
}: NewsLetterInputProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        '.MuiFormHelperText-root': {
          position: 'absolute',
          bottom: '-65%',
          left: '5%',
          m: 0,
          p: 0,
        },
      }}
    >
      <TextField
        sx={{
          '.MuiOutlinedInput-root': {
            borderTopRightRadius: '0px',
            borderBottomRightRadius: '0px',
            minWidth: minWidth ? minWidth : 'initial',
          },
        }}
        size={size}
        variant="outlined"
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={inputDisabled}
        value={value}
        onChange={onChange}
        helperText={helperText}
        error={error}
      />
      <Button
        disabled={disabled || error}
        onClick={onClick}
        color={color}
        disableElevation
        sx={{
          borderTopLeftRadius: '0px',
          borderBottomLeftRadius: '0px',
        }}
        variant="contained"
      >
        {buttonLabel}
      </Button>
    </Box>
  );
}

export default NewsLetterInput;
