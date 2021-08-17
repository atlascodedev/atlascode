import MotionBox from '../../animations/motion-box/MotionBox';

/* eslint-disable-next-line */
export interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

export function TabPanel({
  index,
  value,
  children,
  dir,
  ...props
}: TabPanelProps) {
  return (
    <MotionBox
      role="tabpanel"
      id={`themeful-tabpanel-${index}`}
      hidden={value !== index}
      component="div"
      {...props}
    >
      {value === index && (
        <MotionBox
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1.2,
          }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
          sx={{ p: 3 }}
        >
          {children}
        </MotionBox>
      )}
    </MotionBox>
  );
}

export default TabPanel;
