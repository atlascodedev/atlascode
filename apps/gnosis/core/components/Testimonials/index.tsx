import {
  TestimonialSlider,
  TestimonialSliderProps,
} from '@atlascode/react-core';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TestimonialsProps extends TestimonialSliderProps {}

const Testimonials = (props: TestimonialsProps) => {
  return <TestimonialSlider {...props} />;
};

export default Testimonials;
