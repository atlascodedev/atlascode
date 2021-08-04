import { isFirefox } from '@atlascode/helpers';
import { Box } from '@material-ui/system';
import { AnimatePresence } from 'framer-motion';
import _ from 'lodash';
import React from 'react';
import { transitionPresetMap } from '../../animations/typings';
import { frostedGlassEffect } from '../../mixins/frosted-glass/FrostedGlass';
import MotionBox from '../../utility/motion-box/MotionBox';
import NotificationCard, {
  NotificationCardProps,
} from '../notification-card/NotificationCard';

/* eslint-disable-next-line */
export interface LargeNotificationWithBackdropProps {
  NotificationCardProps?: NotificationCardProps;
  onOpen?: (...args: unknown[]) => void;
  onClose?: (...args: unknown[]) => void;
  handleClose: (...args: unknown[]) => void;
  open: boolean;
}

export function LargeNotificationWithBackdrop({
  NotificationCardProps,
  onClose,
  onOpen,
  open,
  handleClose,
}: LargeNotificationWithBackdropProps) {
  const backdropRef = React.useRef<HTMLElement>(null);
  const [backdropVisibility, setBackdropVisibility] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    onOpen ? onOpen() : _.noop();

    open ? setBackdropVisibility(true) : setBackdropVisibility(false);

    return () => {
      onClose ? onClose() : _.noop();
    };
  }, [open, onClose, onOpen]);

  const eventOnParent = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === backdropRef.current && handleClose) {
      handleClose();
    } else {
      _.noop();
    }
  };

  return (
    <MotionBox
      onClick={eventOnParent}
      ref={backdropRef}
      initial="hidden"
      animate={backdropVisibility ? 'visible' : 'hidden'}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
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
        ...frostedGlassEffect(),
      }}
    >
      <AnimatePresence>
        {backdropVisibility && (
          <MotionBox
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { y: '100vh' },
              visible: { y: 0 },
            }}
            transition={transitionPresetMap['slow']}
          >
            <NotificationCard
              ButtonProps={{ onClick: handleClose }}
              {...NotificationCardProps}
            />
          </MotionBox>
        )}
      </AnimatePresence>
    </MotionBox>
  );
}

export default LargeNotificationWithBackdrop;
