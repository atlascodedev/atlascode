import { Box, Fab } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import SwiperSliderWrapper from '../swiper-react-wrapper/SwiperReactWrapper';
import TestimonialCardRounded, {
  TestimonialCardRoundedProps,
} from '../../components/testimonial-card-rounded/TestimonialCardRounded';
import React from 'react';
import { nanoid } from 'nanoid';

export interface TestimonialSliderProps {
  items: TestimonialCardRoundedProps[];
  controlButtons?: boolean;
  controlButtonsColor?: 'primary' | 'secondary';
}

export function TestimonialSlider({
  items,
  controlButtons = true,
  controlButtonsColor = 'primary',
}: TestimonialSliderProps) {
  const id = React.useMemo(() => nanoid(5), []);

  return (
    <Box>
      <SwiperSliderWrapper
        list={items}
        sx={{
          '.swiper-slide': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
        SwiperProps={{
          navigation: {
            nextEl: `#nextTestimonial-${id}`,
            prevEl: `#prevTestimonial-${id}`,
          },
          slidesPerView: 1,
          spaceBetween: 20,
          breakpoints: {
            1024: {
              slidesPerView: 1.5,
              spaceBetween: 40,
              centeredSlides: true,
              initialSlide: 1,
            },
            1600: {
              slidesPerView: 1.8,
              spaceBetween: 0,
              centeredSlides: true,
              initialSlide: 1,
            },
          },
        }}
        component={TestimonialCardRounded}
      />

      {controlButtons && (
        <Box
          sx={{
            mt: '4rem',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            gap: '5rem',
          }}
        >
          <Fab id={`prevTestimonial-${id}`} color={controlButtonsColor}>
            <KeyboardArrowRight
              sx={{ fontSize: '3.5rem', transform: 'rotateY(180deg)' }}
            />
          </Fab>

          <Fab id={`nextTestimonial-${id}`} color={controlButtonsColor}>
            <KeyboardArrowRight sx={{ fontSize: '3.5rem' }} />
          </Fab>
        </Box>
      )}
    </Box>
  );
}

export default TestimonialSlider;
