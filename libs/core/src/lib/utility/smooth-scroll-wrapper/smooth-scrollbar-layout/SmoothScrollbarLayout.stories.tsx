import { Meta, Story } from '@storybook/react';
import ThemeSmoothScrollLayout, {
  ThemeSmoothScrollLayoutProps,
} from './SmoothScrollbarLayout';


export default {
  title: 'AtlasCode/Utility/General Layout',
  component: ThemeSmoothScrollLayout,
} as Meta;

const Template: Story<ThemeSmoothScrollLayoutProps> = (args) => (
  <ThemeSmoothScrollLayout {...args} />
);

export const Primary = Template.bind({});
Primary.args = {} as ThemeSmoothScrollLayoutProps;
Primary.storyName = 'General Layout - Basic';
