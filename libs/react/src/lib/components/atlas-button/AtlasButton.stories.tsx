import { Story, Meta } from '@storybook/react';
import { AtlasButton, AtlasButtonProps } from './AtlasButton';

export default {
  component: AtlasButton,
  title: 'AtlasButton',
} as Meta;

const Template: Story<AtlasButtonProps> = (args) => <AtlasButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Hello world',
  disableElevation: true,
} as AtlasButtonProps;
Primary.parameters = {
  controls: {
    include: [
      'color',
      'children',
      'disableElevation',
      'disabled',
      'size',
      'variant',
      'compact',
    ] as Array<keyof AtlasButtonProps>,
  },
};
