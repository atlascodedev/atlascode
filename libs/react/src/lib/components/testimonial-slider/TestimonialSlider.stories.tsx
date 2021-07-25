import { Story, Meta } from '@storybook/react';
import { TestimonialSlider, TestimonialSliderProps } from './TestimonialSlider';
import { testimonialCardRoundedMock } from './__mocks__';

export default {
  component: TestimonialSlider,
  title: 'TestimonialSlider',
} as Meta;

const Template: Story<TestimonialSliderProps> = (args) => (
  <TestimonialSlider {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  // items: testimonialCardRoundedMock(20, 'primary'),
};
