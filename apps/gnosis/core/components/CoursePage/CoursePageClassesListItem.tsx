import { Box } from '@material-ui/core';
import React from 'react';
import { AiOutlineClockCircle, AiOutlineDotChart } from 'react-icons/ai';
export interface CoursePageClassesListItemProps {
  label: string;
  duration: string;
}

const CoursePageClassesListItem = ({
  duration,
  label,
}: CoursePageClassesListItemProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '55px',
        borderRadius: '6px',
        bgcolor: '#F6F9FB',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '30% 1fr',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            fontSize: 'clamp(14px, 3vw, 18px)',
            color: (theme) => theme.palette.primary.main,
            fontWeight: 800,
          }}
        >
          <Box component={AiOutlineClockCircle} />
          <Box>{duration}</Box>
        </Box>

        <Box
          sx={{
            fontWeight: 600,
            textTransform: 'capitalize',
            fontSize: 'clamp(13px, 2vw, 17px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: (theme) => theme.palette.primary.main,
          }}
        >
          <Box
            sx={{ p: 0, m: 0, fontSize: 'inherit', color: 'inherit' }}
            component="p"
          >
            {label}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CoursePageClassesListItem;
