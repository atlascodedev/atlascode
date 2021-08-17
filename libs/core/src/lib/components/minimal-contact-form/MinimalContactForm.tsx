import { Box, Button, TextField, ButtonProps, BoxProps } from '@material-ui/core';

export type FormInputProps = {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  helperText: string;
  error: boolean;
};

/* eslint-disable-next-line */
export interface MinimalContactFormProps {
  rightAlign?: boolean;
  title?: string;
  nameInputProps?: Partial<FormInputProps>;
  phoneInputProps?: Partial<FormInputProps>;
  emailInputProps?: Partial<FormInputProps>;
  messageInputProps?: Partial<FormInputProps>;
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
  onSubmit,
  rightAlign,
  title,
}: MinimalContactFormProps) {
  return (
    <Box sx={{ width: '100%', height: 'auto' }}>
      {title && (
        <Box
          component="h2"
          sx={{
            m: 0,
            px: 0,
            py: '3rem',
            fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
            color: (theme) => theme.palette.primary.main,
            fontWeight: 700,
          }}
        >
          {title}
        </Box>
      )}

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '100%' },
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
            ...(rightAlign ? { gridColumn: '2/3' } : {}),
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

const buttonRightAlign: BoxProps['sx'] = {
  gridColumn: '2',
  justifySelf: 'flex-end',
};
