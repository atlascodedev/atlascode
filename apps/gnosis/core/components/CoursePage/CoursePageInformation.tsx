import { Box, Button } from '@material-ui/core';
import { GiAlarmClock } from 'react-icons/gi';
import { IoSchool } from 'react-icons/io5';

export interface CoursePageInformationProps {
  courseName: string;
  courseLevel: string;
  courseArea: string;
  courseDuration: string;
  courseDescription: string;
  courseImage: {
    url: string;
    alt: string;
  };
}
export const CoursePageInformation = ({
  courseArea,
  courseDescription,
  courseImage,
  courseLevel,
  courseName,
  courseDuration,
}: CoursePageInformationProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '0.6fr 1fr' },
        gridTemplateRows: '1fr',
        gridAutoFlow: 'row',
        gap: '30px',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          maxHeight: '450px',
          m: 0,
          p: 0,
        }}
        component="figure"
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
          component="img"
          src={courseImage.url}
          alt={courseImage.alt}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <Box
          component="h1"
          sx={{
            m: 0,
            p: 0,
            fontSize: 'clamp(18px, 6vw, 30px)',
            color: (theme) => theme.palette.primary.main,
            fontWeight: 'bold',
          }}
        >
          {courseName}
        </Box>

        <Box
          component="p"
          sx={{
            p: 0,
            m: 0,
            color: (theme) => theme.palette.primary.main,
            fontSize: 'clamp(16px, 2.2vw, 22px)',
          }}
        >
          {courseDescription}
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Box
              sx={{
                fontSize: 'clamp(16px, 1vw, 18px)',
              }}
              component={GiAlarmClock}
            />
            <Box sx={{ fontSize: 'clamp(14px, 1vw, 16px)' }}>
              {courseDuration}
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Box
              sx={{
                fontSize: 'clamp(16px, 1vw, 18px)',
              }}
              component={IoSchool}
            />
            <Box sx={{ fontSize: 'clamp(14px, 1vw, 16px)' }}>
              {`Curso de ${courseArea} - ${courseLevel}`}
            </Box>
          </Box>

          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              width: 'fit-content',
              color: (theme) => theme.palette.secondary.main,
              fontWeight: 'bold',
            }}
          >
            Tenho interesse
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
