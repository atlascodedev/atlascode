import { Story, Meta } from '@storybook/react';
import { TabPanel, TabPanelProps } from './TabPanel';

export default {
  component: TabPanel,
  title: 'AtlasCode/Utility/Tab panel',
} as Meta;

const Template: Story<TabPanelProps> = (args) => <TabPanel {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
