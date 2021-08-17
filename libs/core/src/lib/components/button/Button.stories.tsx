import { Story, Meta } from '@storybook/react';
import { AtlasButtonProps, AtlasButton } from './Button';

export default {
  component: AtlasButton,
  title: 'Button',
} as Meta;

const Template: Story<AtlasButtonProps> = (args) => <AtlasButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Label here'
};
