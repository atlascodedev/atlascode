import { Story, Meta } from '@storybook/react';
import { TestimonialSlider, TestimonialSliderProps } from './TestimonialSlider';

export default {
  component: TestimonialSlider,
  title: 'TestimonialSlider',
} as Meta;

const Template: Story<TestimonialSliderProps> = (args) => (
  <TestimonialSlider {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
