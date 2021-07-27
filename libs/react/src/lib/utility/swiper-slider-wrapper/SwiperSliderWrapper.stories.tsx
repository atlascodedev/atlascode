import { Story, Meta } from '@storybook/react';
import SwiperSliderWrapper, { SliderWrapperProps } from './SwiperSliderWrapper';

export default {
  component: SwiperSliderWrapper,
  title: 'SwiperSliderWrapper',
} as Meta;

// eslint-disable-next-line @typescript-eslint/ban-types
const Template: Story<SliderWrapperProps<{}>> = (args) => (
  <SwiperSliderWrapper {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
