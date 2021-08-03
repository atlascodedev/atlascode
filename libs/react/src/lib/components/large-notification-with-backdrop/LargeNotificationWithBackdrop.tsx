import { isFirefox } from '@atlascode/helpers';
import { Box } from '@material-ui/system';
import _ from 'lodash';
import React from 'react';
import MotionBox from '../../utility/motion-box/MotionBox';
import NotificationCard, {
  NotificationCardProps,
} from '../notification-card/NotificationCard';

/* eslint-disable-next-line */
export interface LargeNotificationWithBackdropProps {
  NotificationCardProps?: NotificationCardProps;
  onOpen?: (...args: unknown[]) => void;
  onClose?: (...args: unknown[]) => void;
  open?: boolean;
}

export function LargeNotificationWithBackdrop({
  NotificationCardProps,
  onClose,
  onOpen,
  open,
}: LargeNotificationWithBackdropProps) {
  const [backdropVisibility, setBackdropVisibility] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    onOpen ? onOpen() : _.noop();

    open ? setBackdropVisibility(true) : setBackdropVisibility(false);

    return () => {
      onClose ? onClose() : _.noop();
    };
  }, [open, onClose, onOpen]);

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'fixed',
        width: '100%',
        height: '100vh',
        top: 0,
        left: 0,
        zIndex: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        ...(isFirefox()
          ? { backgroundColor: 'rgba(133, 133, 133, 0.5' }
          : {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(10px)',
            }),
      }}
    >
      <MotionBox sx={{}}>
        <NotificationCard {...NotificationCardProps} />
      </MotionBox>
    </Box>
  );
}

export default LargeNotificationWithBackdrop;
