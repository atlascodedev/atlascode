import { Box, Button, TextField, ButtonProps, Theme } from '@material-ui/core';
import { AtlasCSSVariant } from '../../utility/atlas-theme-provider/theme-utilities';

export type FormInputProps = {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  helperText: string;
  error: boolean;
};

/* eslint-disable-next-line */
export interface MinimalContactFormProps {
  nameInputProps: Partial<FormInputProps>;
  phoneInputProps: Partial<FormInputProps>;
  emailInputProps: Partial<FormInputProps>;
  messageInputProps: Partial<FormInputProps>;
  onSubmit?: (...args: unknown[]) => void;
  buttonProps?: {
    rightAlign?: boolean;
    color?: 'primary' | 'secondary';
    variant?: ButtonProps['variant'];
    label?: string;
  };
}

export function MinimalContactForm({
  emailInputProps = {
    label: 'Email',
    placeholder: 'Ex. joao.vitor@gmail.com',
  },
  messageInputProps = {
    label: 'Mensagem',
    placeholder: 'Ex: Tenho dúvidas a respeito de...',
  },
  nameInputProps = {
    label: 'Nome completo',
    placeholder: 'Ex. João Vitor',
  },
  phoneInputProps = {
    label: 'Número',
    placeholder: 'Ex: (00) 0-0000-0000',
  },
  buttonProps = {
    color: 'primary',
    label: 'Enviar',
  },
}: MinimalContactFormProps) {
  return (
    <Box sx={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '100%', lg: '50% 50%' },
          gridAutoFlow: 'row',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gridTemplateRows: { xs: '1fr', md: 'none' },
            gridAutoFlow: 'row',
            columnGap: '4rem',
            rowGap: '5rem',
          }}
        >
          <TextField
            sx={{ gridColumn: { xs: '1/3', md: 'auto' } }}
            variant="outlined"
            {...nameInputProps}
          />
          <TextField
            sx={{ gridColumn: { xs: '1/3', md: 'auto' } }}
            variant="outlined"
            {...phoneInputProps}
          />

          <TextField
            sx={{ gridColumn: '1/3' }}
            variant="outlined"
            {...emailInputProps}
          />

          <TextField
            {...messageInputProps}
            sx={{ gridColumn: '1/3' }}
            variant="outlined"
            multiline
            rows={8}
          />

          <Button
            sx={{
              maxWidth: 'fit-content',
              fontSize: '1.5rem',
              textTransform: 'inherit',
              ...(buttonProps.rightAlign
                ? (buttonRightAlign as Record<string, unknown>)
                : {}),
            }}
            variant="contained"
            color={buttonProps.color}
            size="large"
          >
            {buttonProps.label}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default MinimalContactForm;

const buttonRightAlign: AtlasCSSVariant = {
  gridColumn: '2',
  justifySelf: 'flex-end',
};
