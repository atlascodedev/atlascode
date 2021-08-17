// import { AnimatePresence } from 'framer-motion';
// import _ from 'lodash';
// import React from 'react';

// import NotificationCard, {
//   NotificationCardProps,
// } from '../notification-card/NotificationCard';

// /* eslint-disable-next-line */
// export interface LargeNotificationWithBackdropProps {
//   NotificationCardProps?: NotificationCardProps;
//   onOpen?: (...args: unknown[]) => void;
//   onClose?: (...args: unknown[]) => void;
//   handleClose: (...args: unknown[]) => void;
//   open: boolean;
// }

// export function LargeNotificationWithBackdrop({
//   NotificationCardProps,
//   onClose,
//   onOpen,
//   open,
//   handleClose,
// }: LargeNotificationWithBackdropProps) {
//   const backdropRef = React.useRef<HTMLElement>(null);
//   const [backdropVisibility, setBackdropVisibility] =
//     React.useState<boolean>(false);

//   React.useEffect(() => {
//     onOpen ? onOpen() : _.noop();

//     open ? setBackdropVisibility(true) : setBackdropVisibility(false);

//     return () => {
//       onClose ? onClose() : _.noop();
//     };
//   }, [open, onClose, onOpen]);

//   const eventOnParent = (e: React.MouseEvent<HTMLElement>) => {
//     if (e.target === backdropRef.current && handleClose) {
//       handleClose();
//     } else {
//       _.noop();
//     }
//   };

//   return (
//     <AnimatePresence>
//       {backdropVisibility && (
//         <MotionBox
//           onClick={eventOnParent}
//           ref={backdropRef}
//           initial="hidden"
//           animate={'visible'}
//           exit="hidden"
//           layout
//           variants={{
//             hidden: {
//               opacity: 0,
//             },
//             visible: {
//               opacity: 1,
//             },
//           }}
//           sx={{
//             display: 'flex',
//             position: 'fixed',
//             width: '100%',
//             height: '100vh',
//             top: 0,
//             left: 0,
//             zIndex: 1000,
//             justifyContent: 'center',
//             alignItems: 'center',
//             ...frostedGlassEffect(),
//           }}
//         >
//           <AnimatePresence>
//             {backdropVisibility && (
//               <MotionBox
//                 initial="hidden"
//                 animate="visible"
//                 exit="hidden"
//                 variants={{
//                   hidden: { y: '100vh' },
//                   visible: { y: 0 },
//                 }}
//               >
//                 <NotificationCard
//                   ButtonProps={{ onClick: handleClose }}
//                   {...NotificationCardProps}
//                 />
//               </MotionBox>
//             )}
//           </AnimatePresence>
//         </MotionBox>
//       )}
//     </AnimatePresence>
//   );
// }

// export default LargeNotificationWithBackdrop;
