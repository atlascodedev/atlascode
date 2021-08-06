import { useSmoothScrollbar } from '@atlascode/react-core';
import { Box } from '@material-ui/core';
import React from 'react';
import CoursePageClassesListItem, {
  CoursePageClassesListItemProps,
} from './CoursePageClassesListItem';

export interface CoursePageClassesListProps {
  items: CoursePageClassesListItemProps[];
}

const CoursePageClassesList = ({ items = [] }: CoursePageClassesListProps) => {
  const listContainerRef = React.useRef<HTMLElement>(null);
  const smoothScroll = useSmoothScrollbar(listContainerRef);

  return (
    <Box
      ref={listContainerRef}
      sx={{
        borderRadius: '8px',
        bgcolor: (theme) => theme.palette.primary.main,
        width: '100%',
        height: { xs: '350px', md: '450px', lg: '550px' },
        display: 'flex',
        overflow: 'hidden',
        '.scrollbar-track .scrollbar-thumb': {
          background: (theme) => theme.palette.secondary.main,
        },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridTemplateRows: '1fr',
          gridAutoFlow: 'row',
          p: '3rem',
          rowGap: '20px',

          px: { xs: '1rem', lg: '6rem' },
        }}
      >
        {items.map(({ duration, label }, index) => {
          return (
            <CoursePageClassesListItem
              duration={duration}
              label={label}
              key={index}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default CoursePageClassesList;
