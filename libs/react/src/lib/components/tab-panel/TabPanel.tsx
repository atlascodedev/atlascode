import { Box } from '@material-ui/core';

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
    <Box
      role="tabpanel"
      id={`themeful-tabpanel-${index}`}
      hidden={value !== index}
      component="div"
      {...props}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
}

export default TabPanel;
