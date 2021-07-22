import { Story, Meta } from '@storybook/react';
import { ThemeTabs, ThemeTabsProps } from './ThemeTabs';

export default {
  component: ThemeTabs,
  title: 'ThemeTabs',
} as Meta;

const Template: Story<ThemeTabsProps> = (args) => <ThemeTabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
