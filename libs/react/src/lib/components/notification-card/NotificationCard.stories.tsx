import { Story, Meta } from '@storybook/react';
import { NotificationCard, NotificationCardProps } from './NotificationCard';

export default {
  component: NotificationCard,
  title: 'AtlasCode/Cards/NotificationCard',
} as Meta;

const Template: Story<NotificationCardProps> = (args) => (
  <NotificationCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
