import { Story, Meta } from '@storybook/react';
import {
  NotificationContext,
  NotificationContextProps,
} from './NotificationContext';

export default {
  component: NotificationContext,
  title: 'NotificationContext',
} as Meta;

const Template: Story<NotificationContextProps> = (args) => (
  <NotificationContext {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
