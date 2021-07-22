import { Story, Meta } from '@storybook/react';
import { TabPanel, TabPanelProps } from './TabPanel';

export default {
  component: TabPanel,
  title: 'TabPanel',
} as Meta;

const Template: Story<TabPanelProps> = (args) => <TabPanel {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
