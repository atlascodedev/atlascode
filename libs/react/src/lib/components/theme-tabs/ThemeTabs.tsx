import { AppBar, Box, Tabs } from '@material-ui/core';
import React from 'react';

/* eslint-disable-next-line */
export interface ThemeTabsProps {
  value: number;
  onChange: (newValue: number) => void;
}

export function ThemeTabs({ onChange, value }: ThemeTabsProps) {
  const [state, setState] = React.useState(0);

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 550 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={(event, newValue) => onChange(newValue)}
          indicatorColor="secondary"
          variant="fullWidth"
        ></Tabs>
      </AppBar>
    </Box>
  );
}

export default ThemeTabs;
