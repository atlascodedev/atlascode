import { Box } from '@material-ui/core';
import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormInputProps } from '../minimal-contact-form/MinimalContactForm';

/* eslint-disable-next-line */
export interface ContactFormDialogProps {
  title?: string;
  subtitle?: string;
  cancelLabel?: string;
  submitLabel?: string;
  onSubmit?: (...args: unknown[]) => void;
  handleClose?: (...args: unknown[]) => void;
  open?: boolean;
  nameInputProps: Partial<FormInputProps>;
  phoneInputProps: Partial<FormInputProps>;
  emailInputProps: Partial<FormInputProps>;
  messageInputProps: Partial<FormInputProps>;
}

export function ContactFormDialog({
  title = 'Placeholder title',
  subtitle = 'Lorem ipsum dolum salet, please fill out this fields this is placeholder text to give context about this forms purpose to the end user.',
  cancelLabel = 'Cancel',
  submitLabel = 'Send',
  onSubmit,
  handleClose,
  open = false,
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
}: ContactFormDialogProps) {
  return (
    <Dialog
      sx={{
        '.MuiDialog-paper': {
          minWidth: '50%',
        },
      }}
      maxWidth={'xl'}
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{subtitle}</DialogContentText>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gridAutoFlow: 'row',
            gap: '3rem',
          }}
        >
          <TextField
            {...nameInputProps}
            autoFocus
            margin="dense"
            fullWidth
            variant="outlined"
          />
          <TextField
            {...emailInputProps}
            margin="dense"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            {...phoneInputProps}
            sx={{ gridColumn: '1/3' }}
            margin="dense"
            fullWidth
            variant="outlined"
          />
          <TextField
            {...messageInputProps}
            sx={{ gridColumn: '1/3' }}
            margin="dense"
            fullWidth
            variant="outlined"
            multiline
            rows={6}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{cancelLabel}</Button>
        <Button onClick={onSubmit}>{submitLabel}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ContactFormDialog;
