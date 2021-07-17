import { Story, Meta } from '@storybook/react';
import ThemeSmoothScrollLayout from '../../layouts/theme-smooth-scroll-layout/ThemeSmoothScrollLayout';
import {
  HeroScreenWhiteDots,
  HeroScreenWhiteDotsProps,
} from './HeroScreenWhiteDots';

export default {
  component: HeroScreenWhiteDots,
  title: 'AtlasCode/Screens/Hero screen - white - dots background pattern',
  decorators: [
    (Story) => (
      <ThemeSmoothScrollLayout>
        <Story />
      </ThemeSmoothScrollLayout>
    ),
  ],
  parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<HeroScreenWhiteDotsProps> = (args) => (
  <HeroScreenWhiteDots {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
