import { Alert, Snackbar, Stack } from '@material-ui/core';
import React from 'react';

export type AlertSeverity = 'success' | 'error' | 'warning' | 'info';

export interface AlertContextState {
  open?: boolean;
  severity?: AlertSeverity;
  message?: string;
  setAlert: (severity: AlertSeverity, message: string) => void;
}

/* eslint-disable-next-line */
export interface AlertContextProps {}

export const AlertContext = React.createContext<AlertContextState | undefined>(
  undefined
);

interface AlertContextProviderProps {
  children?: React.ReactNode;
}

export const AlertContextProvider = ({
  children,
}: AlertContextProviderProps) => {
  const [alertState, setAlertState] = React.useState<
    Omit<AlertContextState, 'setAlert'>
  >({
    message: '',
    open: false,
    severity: 'success',
  });

  const handleSetAlert = (severity: AlertSeverity, message: string) => {
    setAlertState({
      message: message,
      open: true,
      severity: severity,
    });
  };

  const handleClose = () => {
    setAlertState((prevState) => {
      return { ...prevState, open: false };
    });
  };

  return (
    <AlertContext.Provider
      value={{
        message: alertState.message,
        open: alertState.open,
        severity: alertState.severity,
        setAlert: handleSetAlert,
      }}
    >
      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert
            sx={{ alignItems: 'center', minWidth: '135px', p: '4px 14px' }}
            variant="filled"
            severity={alertState.severity}
          >
            {alertState.message}
          </Alert>
        </Stack>
      </Snackbar>
      {children}
    </AlertContext.Provider>
  );
};

interface AlertContextConsumerProps {
  children(context: AlertContextState): React.ReactNode;
}

export const AlertContextConsumer = ({
  children,
}: AlertContextConsumerProps) => {
  return (
    <AlertContext.Consumer>
      {(context) => {
        if (typeof context === 'undefined') {
          throw new Error('Component is not within Alert Context Provider');
        }

        return children(context);
      }}
    </AlertContext.Consumer>
  );
};

export const useAlertContext = () => {
  const context = React.useContext(AlertContext);

  if (typeof context === 'undefined') {
    throw new Error('Component is not within Alert Context Provider');
  }

  return context;
};
