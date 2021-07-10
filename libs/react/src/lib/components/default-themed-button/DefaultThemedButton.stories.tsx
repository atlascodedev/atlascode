import { Story, Meta } from '@storybook/react';
import {
  DefaultThemedButton,
  DefaultThemedButtonProps,
} from './DefaultThemedButton';

export default {
  component: DefaultThemedButton,
  title: 'DefaultThemedButton',
} as Meta;

const Template: Story<DefaultThemedButtonProps> = (args) => (
  <DefaultThemedButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
