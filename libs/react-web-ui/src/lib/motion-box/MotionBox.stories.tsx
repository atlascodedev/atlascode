import { Story, Meta } from '@storybook/react';
import { MotionBox, MotionBoxProps } from './MotionBox';

export default {
  component: MotionBox,
  title: 'MotionBox',
} as Meta;

const Template: Story<MotionBoxProps> = (args) => <MotionBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
