import { Box } from '@material-ui/core';
import SwiperSliderWrapper from '../../utility/swiper-slider-wrapper/SwiperSliderWrapper';
import { TestimonialCardRoundedProps } from '../testimonial-card-rounded/TestimonialCardRounded';

export interface TestimonialSliderProps {
  items: TestimonialCardRoundedProps[];
}

export function TestimonialSlider(props: TestimonialSliderProps) {
  return (
    <SwiperSliderWrapper SwiperProps={{ slidesPerView: 3 }} component={Box} />
  );
}

export default TestimonialSlider;
