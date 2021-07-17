import { Meta, Story } from '@storybook/react';
import GnosisLayout, { GnosisLayoutProps } from './GnosisLayout';

export default {
  title: 'Instituto Gnosis/Layout',
  component: GnosisLayout,
} as Meta;

const Template: Story<GnosisLayoutProps> = (args) => <GnosisLayout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <div style={{ height: '3000px', width: '100%' }}>hello</div>,
} as GnosisLayoutProps;
Primary.storyName = 'Instituto Gnosis Layout - Mains';
