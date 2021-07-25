import { TestimonialCardRoundedProps } from '../testimonial-card-rounded/TestimonialCardRounded';

export interface TestimonialSliderProps {
  items: TestimonialCardRoundedProps[];
}

export function TestimonialSlider(props: TestimonialSliderProps) {
  return (
    <div>
      <h1>Welcome to testimonial-slider!</h1>
    </div>
  );
}

export default TestimonialSlider;
