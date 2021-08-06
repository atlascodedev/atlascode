import { TabPanel } from '@atlascode/react-core';
import { Box, Button, Tab, Tabs } from '@material-ui/core';
import { CourseClass } from '../../pages/cursos/[level]/[area]/[slug]/[id]';
import CoursePageClassesList from './CoursePageClassesList';

export interface CoursePageTabsProps {
  classes: CourseClass[];
  coursePrerequisites: string;
  courseEmec: {
    imageURL: string;
    link: string;
  };
  activeTab: number;
  setActiveTab: (...args: unknown[]) => void;
}
export const CoursePageTabs = ({
  activeTab,
  setActiveTab,
  classes,
  courseEmec,
  coursePrerequisites,
}: CoursePageTabsProps) => {
  return (
    <Box>
      <Box sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
        <Tabs
          value={activeTab}
          onChange={(event, value) => setActiveTab(value)}
          textColor="inherit"
          variant="fullWidth"
          sx={{ color: (theme) => theme.palette.primary.contrastText }}
          indicatorColor="secondary"
        >
          <Tab label="Matriz curricular" />
          <Tab label="Modalidade" />
          <Tab label="Pré-requisitos" />
          <Tab label="E-MEC" />
        </Tabs>
      </Box>

      <Box>
        <TabPanel value={activeTab} index={0}>
          <CoursePageClassesList
            items={classes.map((value, index) => {
              return { duration: value.duration as string, label: value.label };
            })}
          />
        </TabPanel>
        <TabPanel value={activeTab} index={1}>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="h2"
              sx={{
                m: 0,
                p: 0,
                fontWeight: 600,
                fontSize: 'clamp(16px, 5vw, 25px',
                color: (theme) => theme.palette.primary.main,
              }}
            >
              Unknown
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={activeTab} index={2}>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="h2"
              sx={{
                m: 0,
                p: 0,
                fontWeight: 600,
                fontSize: 'clamp(16px, 5vw, 25px',
                color: (theme) => theme.palette.primary.main,
              }}
            >
              {coursePrerequisites}
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={activeTab} index={3}>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              height: { xs: 'auto', lg: 'auto' },
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '35px',
            }}
          >
            <Box
              component="img"
              src={courseEmec.imageURL}
              sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />

            <Button
              LinkComponent={'a'}
              target="_blank"
              href={courseEmec.link}
              variant="text"
            >
              {courseEmec.link}
            </Button>
          </Box>
        </TabPanel>
      </Box>
    </Box>
  );
};
