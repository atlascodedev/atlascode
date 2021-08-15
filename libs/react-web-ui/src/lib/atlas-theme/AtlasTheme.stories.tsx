import { Story, Meta } from '@storybook/react';
import { AtlasCodeThemeProvider, AtlasCodeThemeProviderProps } from './AtlasTheme';

export default {
  component: AtlasCodeThemeProvider,
  title: 'AtlasTheme',
} as Meta;

const Template: Story<AtlasCodeThemeProviderProps> = (args) => <AtlasCodeThemeProvider {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
