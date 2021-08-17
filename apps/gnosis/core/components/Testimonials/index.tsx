import { TestimonialSlider, TestimonialSliderProps } from '@atlascode/core';
import { Box } from '@material-ui/core';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TestimonialsProps extends TestimonialSliderProps {}

const Testimonials = (props: TestimonialsProps) => {
  return (
    <Box sx={{ py: '8rem', backgroundColor: '#F6F9FB' }}>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          color: (theme) => theme.palette.primary.main,
          fontWeight: 700,
          fontSize: { xs: '2.2rem', lg: '3.2rem' },
          pb: { xs: '5rem', md: '6.5rem', lg: '8rem' },
        }}
      >
        Depoimentos
      </Box>
      <TestimonialSlider {...props} />
    </Box>
  );
};

export default Testimonials;
