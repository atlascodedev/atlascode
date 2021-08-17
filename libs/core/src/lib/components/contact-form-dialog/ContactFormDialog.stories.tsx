import { Story, Meta } from '@storybook/react';
import { ContactFormDialog, ContactFormDialogProps } from './ContactFormDialog';

export default {
  component: ContactFormDialog,
  title: 'AtlasCode/Forms/Contact Form - Dialog',
} as Meta;

const Template: Story<ContactFormDialogProps> = (args) => (
  <ContactFormDialog {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  open: true,
};
