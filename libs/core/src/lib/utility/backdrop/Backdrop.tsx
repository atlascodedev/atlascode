import MotionBox from '../../animations/motion-box/MotionBox';

/* eslint-disable-next-line */
export interface BackdropProps {}

export function Backdrop(props: BackdropProps) {
  return (
    <MotionBox
      sx={{
        width: '100%',
        height: '100vh',
        bgcolor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <MotionBox
        sx={{
          width: '200px',
          height: '200px',
          backgroundColor: 'pink',
          borderRadius: '8px',
        }}
      />
    </MotionBox>
  );
}

export default Backdrop;
