import { Story, Meta } from '@storybook/react';
import {
  ContactThankyouPage,
  ContactThankyouPageProps,
} from './ContactThankyouPage';

export default {
  component: ContactThankyouPage,
  title: 'ContactThankyouPage',
} as Meta;

const Template: Story<ContactThankyouPageProps> = (args) => (
  <ContactThankyouPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
