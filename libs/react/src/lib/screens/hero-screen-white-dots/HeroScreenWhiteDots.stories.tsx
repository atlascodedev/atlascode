import { Story, Meta } from '@storybook/react';
import {
  HeroScreenWhiteDots,
  HeroScreenWhiteDotsProps,
} from './HeroScreenWhiteDots';

export default {
  component: HeroScreenWhiteDots,
  title: 'HeroScreenWhiteDots',
} as Meta;

const Template: Story<HeroScreenWhiteDotsProps> = (args) => (
  <HeroScreenWhiteDots {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
