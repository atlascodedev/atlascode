import {
  OfferSlider,
  OfferSliderProps,
  polkaPattern,
  TabPanel,
} from '@atlascode/core';
import { Box, Tab, Tabs } from '@material-ui/core';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CoursesProps {
  coursesPos?: OfferSliderProps['items'];
  coursesExt?: OfferSliderProps['items'];
  coursesMulti?: OfferSliderProps['items'];
}

const Courses = ({ coursesExt, coursesMulti, coursesPos }: CoursesProps) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        pb: { xs: '5rem', lg: '15rem' },
      }}
    >
      <Box
        sx={{
          ...(polkaPattern('#fff', 0.4, 50, 'grey') as Record<string, unknown>),
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: '90%',
            width: { xs: '90%', md: '60%' },
            backgroundColor: (theme) => theme.palette.primary.main,
            borderRadius: '4px',
            marginTop: '4rem',
          }}
        >
          <Tabs
            textColor="inherit"
            variant="fullWidth"
            sx={{ color: (theme) => theme.palette.primary.contrastText }}
            value={activeTab}
            onChange={(e, value) => setActiveTab(value)}
            indicatorColor="secondary"
          >
            <Tab label="Pós-graduação" />
            <Tab label="Extensão" />
            <Tab label="Multidisciplinar" />
          </Tabs>
        </Box>
      </Box>

      <Box
        sx={{
          py: '3rem',
        }}
      >
        <TabPanel index={0} value={activeTab}>
          <OfferSlider items={coursesPos} />
        </TabPanel>

        <TabPanel index={1} value={activeTab}>
          <OfferSlider items={coursesExt} />
        </TabPanel>

        <TabPanel index={2} value={activeTab}>
          <OfferSlider items={coursesMulti} />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Courses;
