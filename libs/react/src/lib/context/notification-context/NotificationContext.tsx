import React from 'react';

export const NotificationContext = React.createContext(undefined);

/* eslint-disable-next-line */
export interface NotificationContextProps {}

export function NotificationContextOk(props: NotificationContextProps) {
  return (
    <div>
      <h1>Welcome to notification-context!</h1>
    </div>
  );
}

export default NotificationContext;
