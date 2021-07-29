import { Story, Meta } from '@storybook/react';
import { ThemeTabs, ThemeTabsProps } from './ThemeTabs';

export default {
  component: ThemeTabs,
  title: 'Unstable/ThemeTabs',
} as Meta;

const Template: Story<ThemeTabsProps> = (args) => <ThemeTabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tabItems: [
    { tabTitle: 'Tab one', tabComponent: <div>Hello world</div> },
    { tabTitle: 'Hello hello again', tabComponent: <div>Hello sir</div> },
    { tabTitle: 'Hello hello again', tabComponent: <div>Hello sir</div> },
    { tabTitle: 'Hello hello again', tabComponent: <div>Hello sir</div> },
  ],
};
