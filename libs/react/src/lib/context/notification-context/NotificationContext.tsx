import _ from 'lodash';
import React from 'react';
import LargeNotificationWithBackdrop from '../../components/large-notification-with-backdrop/LargeNotificationWithBackdrop';
import { notificationDialogReducer } from './reducer';
import {
  NotificationDialogContext,
  NotificationDialogState,
  NOTIFICATION_VISIBILITY,
} from './typings';

export const NotificationContext = React.createContext<
  NotificationDialogContext | undefined
>(undefined);

const initialState: NotificationDialogState = {
  open: false,
  dialogMessage: '',
  dialogSeverity: 'success',
  dialogTitle: '',
};
interface NotificationDialogProviderProps {
  children?: React.ReactNode;
}

export const NotificationDialogProvider = ({
  children,
}: NotificationDialogProviderProps) => {
  const [state, dispatch] = React.useReducer(
    notificationDialogReducer,
    initialState
  );

  const store = React.useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );

  return (
    <NotificationContext.Provider value={store}>
      <React.Fragment>
        <LargeNotificationWithBackdrop
          open={store.state.open}
          NotificationCardProps={{
            message: store.state.dialogMessage,
            title: store.state.dialogTitle,
            type: store.state.dialogSeverity,
          }}
          handleClose={() => dispatch({ type: NOTIFICATION_VISIBILITY.HIDDEN })}
        />
        {children}
      </React.Fragment>
    </NotificationContext.Provider>
  );
};

interface NotificationDialogConsumerProps {
  children(context: NotificationDialogContext): React.ReactNode;
}

export const NotificationDialogConsumer = ({
  children,
}: NotificationDialogConsumerProps) => {
  return (
    <NotificationContext.Consumer>
      {(context) => {
        if (typeof context === 'undefined') {
          throw new Error(
            'Component is not within a Notification Dialog Provider'
          );
        }

        return children(context);
      }}
    </NotificationContext.Consumer>
  );
};

export const useNotificationDialog = () => {
  const context = React.useContext(NotificationContext);

  if (typeof context === 'undefined') {
    throw new Error('Component is not within a Notification Dialog Provider');
  }

  return context;
};
