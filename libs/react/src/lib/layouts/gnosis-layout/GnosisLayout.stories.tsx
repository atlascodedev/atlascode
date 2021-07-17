import { Meta, Story } from '@storybook/react';
import GnosisLayout, { GnosisLayoutProps } from './GnosisLayout';

export default {
  title: 'Instituto Gnosis/Layout',
  component: GnosisLayout,
} as Meta;

const Template: Story<GnosisLayoutProps> = (...args) => (
  <GnosisLayout {...args} />
);

export const Primary = Template.bind({});
Primary.args = {} as GnosisLayoutProps;
Primary.storyName = 'Instituto Gnosis Layout - Mains';
