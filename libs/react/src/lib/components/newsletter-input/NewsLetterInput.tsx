import {
  Box,
  Button,
  ButtonProps,
  OutlinedTextFieldProps,
  TextField,
} from '@material-ui/core';

type NewsLetterInputTextFieldProps = Pick<
  OutlinedTextFieldProps,
  'onChange' | 'value' | 'defaultValue' | 'error' | 'helperText' | 'placeholder'
>;

type NewsLetterInputButtonProps = Pick<ButtonProps, 'disabled' | 'onClick'>;

/* eslint-disable-next-line */
export interface NewsLetterInputProps
  extends NewsLetterInputTextFieldProps,
    NewsLetterInputButtonProps {
  color?: 'primary' | 'secondary';
  inputDisabled?: boolean;
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
}: NewsLetterInputProps) {
  return (
    <Box sx={{ display: 'flex' }}>
      <TextField
        sx={{
          '.MuiOutlinedInput-root': {
            borderTopRightRadius: '0px',
            borderBottomRightRadius: '0px',
          },
        }}
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
        disabled={disabled}
        onClick={onClick}
        color={color}
        disableElevation
        sx={{ borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }}
        variant="contained"
      >
        Enviar
      </Button>
    </Box>
  );
}

export default NewsLetterInput;
