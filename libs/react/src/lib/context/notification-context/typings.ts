type NotificationDialogSeverity = 'success' | 'warning' | 'error' | 'info';

export enum NOTIFICATION_VISIBILITY {
  VISIBLE = 'VISIBLE',
  HIDDEN = 'HIDDEN',
}

interface NotificationVisible {
  type: NOTIFICATION_VISIBILITY.VISIBLE;
  payload: {
    title: string;
    message: string;
    severity: NotificationDialogSeverity;
  };
}

interface NotificationHidden {
  type: NOTIFICATION_VISIBILITY.HIDDEN;
}

export type NotificationVisibilityActions =
  | NotificationVisible
  | NotificationHidden;

export type NotificationActionTypes = NotificationVisibilityActions;

export type NotificationDialogDispatch = (
  action: NotificationActionTypes
) => void;

export interface NotificationDialogState {
  dialogTitle?: string;
  dialogMessage?: string;
  dialogSeverity?: NotificationDialogSeverity;
  open: boolean;
}

export interface NotificationDialogContext {
  state: NotificationDialogState;
  dispatch: NotificationDialogDispatch;
}
