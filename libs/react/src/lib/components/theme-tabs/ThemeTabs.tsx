import {
  AppBar,
  Box,
  Tab,
  Tabs,
  TabsProps,
  useMediaQuery,
} from '@material-ui/core';
import React from 'react';
import TabPanel from '../tab-panel/TabPanel';

export interface ThemeTabItem {
  tabTitle: string;
  tabComponent: JSX.Element;
}

/* eslint-disable-next-line */
export interface ThemeTabsProps {
  tabItems: ThemeTabItem[];
  color?: 'primary' | 'secondary';
  tabVariant?: TabsProps['variant'];
  appbarWidth?: string;
  centered?: boolean;
}

export function ThemeTabs({
  tabItems,
  color = 'primary',
  tabVariant = 'fullWidth',
  appbarWidth = 'auto',
  centered,
  ...props
}: ThemeTabsProps) {
  const [state, setState] = React.useState(0);

  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          // width: appbarWidth,
          justifyContent: centered ? 'center' : 'stretch',
          display: 'flex',
          borderRadius: '10px',
          '& .MuiTab-root': {
            color: (theme) => `${theme.palette[color].contrastText} !important`,
          },
        }}
      >
        <AppBar
          sx={{
            bgcolor: (theme) => theme.palette[color].main,
            width: appbarWidth,
          }}
          position="static"
        >
          <Tabs
            sx={{
              '& .MuiTabs-flexContainer': {
                display: 'flex',
                justifyContent: 'space-around',
              },
            }}
            value={state}
            onChange={(event, newValue) => setState(newValue)}
            variant={isMobile ? 'scrollable' : tabVariant}
            indicatorColor={color === 'primary' ? 'secondary' : 'primary'}
          >
            {tabItems.map(({ tabComponent, tabTitle }, index) => {
              return (
                <Tab
                  sx={{ color: (theme) => theme.palette[color].contrastText }}
                  label={tabTitle}
                  key={index}
                />
              );
            })}
          </Tabs>
        </AppBar>
      </Box>
      {tabItems.map(({ tabComponent, tabTitle }, index) => {
        return (
          <TabPanel value={state} index={index} key={index}>
            {tabComponent}
          </TabPanel>
        );
      })}
    </Box>
  );
}

export default ThemeTabs;
