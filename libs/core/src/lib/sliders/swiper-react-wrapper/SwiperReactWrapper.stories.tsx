/* eslint-disable @typescript-eslint/ban-types */
import { Story, Meta } from '@storybook/react';
import {
  SwiperReactWrapperProps,
  SwiperReactWrapper
} from './SwiperReactWrapper';

export default {
  component: SwiperReactWrapper,
  title: 'SwiperReactWrapper',
} as Meta;

const Template: Story<SwiperReactWrapperProps<{}>> = (args) => (
  <SwiperReactWrapper {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
