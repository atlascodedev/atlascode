import { Meta, Story } from '@storybook/react';
import GeneralLayout, { GeneralLayoutProps } from './ThemeSmoothScrollLayout';

export default {
  title: 'AtlasCode/Utility/General Layout',
  component: GeneralLayout,
} as Meta;

const Template: Story<GeneralLayoutProps> = (args) => (
  <GeneralLayout {...args} />
);

export const Primary = Template.bind({});
Primary.args = {} as GeneralLayoutProps;
Primary.storyName = 'General Layout - Basic';
