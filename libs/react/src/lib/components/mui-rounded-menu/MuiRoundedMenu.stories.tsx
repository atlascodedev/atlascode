import { Story, Meta } from '@storybook/react';
import { MuiRoundedMenu, MuiRoundedMenuProps } from './MuiRoundedMenu';

export default {
  component: MuiRoundedMenu,
  title: 'Unstable/MuiRoundedMenu',
} as Meta;

const Template: Story<MuiRoundedMenuProps> = (args) => (
  <MuiRoundedMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
