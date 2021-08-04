import {
  NotificationActionTypes,
  NotificationDialogState,
  NOTIFICATION_VISIBILITY,
} from './typings';

export const notificationDialogReducer = (
  state: NotificationDialogState,
  action: NotificationActionTypes
): NotificationDialogState => {
  switch (action.type) {
    case NOTIFICATION_VISIBILITY.HIDDEN:
      return { ...state, open: false };

    case NOTIFICATION_VISIBILITY.VISIBLE:
      return {
        ...state,
        open: true,
        dialogMessage: action.payload.message,
        dialogSeverity: action.payload.severity,
        dialogTitle: action.payload.title,
      };
  }
};
