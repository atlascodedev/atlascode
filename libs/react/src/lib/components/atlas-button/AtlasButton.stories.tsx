import { Story, Meta } from '@storybook/react';
import { AtlasButton, AtlasButtonProps } from './AtlasButton';

export default {
  component: AtlasButton,
  title: 'AtlasCode/Buttons/Rounded',
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
Primary.storyName = 'Contained';

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: 'outlined',
};
Secondary.parameters = { ...Primary.parameters };
Secondary.storyName = ' Outlined';
