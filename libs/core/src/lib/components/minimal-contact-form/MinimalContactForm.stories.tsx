import { Story, Meta } from '@storybook/react';
import {
  MinimalContactForm,
  MinimalContactFormProps,
} from './MinimalContactForm';

export default {
  component: MinimalContactForm,
  title: 'AtlasCode/Forms/MinimalContactForm',
} as Meta;

const Template: Story<MinimalContactFormProps> = (args) => (
  <MinimalContactForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  rightAlign: false,
};
