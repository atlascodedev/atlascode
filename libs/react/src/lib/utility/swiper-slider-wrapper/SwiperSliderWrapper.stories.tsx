import { Story, Meta } from '@storybook/react';
import {
  SwiperSliderWrapper,
  SwiperSliderWrapperProps,
} from './SwiperSliderWrapper';

export default {
  component: SwiperSliderWrapper,
  title: 'SwiperSliderWrapper',
} as Meta;

const Template: Story<SwiperSliderWrapperProps> = (args) => (
  <SwiperSliderWrapper {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
