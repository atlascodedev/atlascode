import { Story, Meta } from '@storybook/react';
import { MdFace, MdZoomIn } from 'react-icons/md';
import { IconButtonCircle, IconButtonCircleProps } from './IconButtonCircle';

export default {
  component: IconButtonCircle,
  title: 'AtlasCode/Buttons/IconButtonCircle',
} as Meta;

const Template: Story<IconButtonCircleProps> = (args) => (
  <IconButtonCircle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  icon: MdZoomIn,
};
