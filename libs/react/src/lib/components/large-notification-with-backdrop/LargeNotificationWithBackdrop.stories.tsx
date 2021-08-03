import { Box } from '@material-ui/core';
import { Story, Meta } from '@storybook/react';
import {
  LargeNotificationWithBackdrop,
  LargeNotificationWithBackdropProps,
} from './LargeNotificationWithBackdrop';

export default {
  component: LargeNotificationWithBackdrop,
  title: 'LargeNotificationWithBackdrop',
  decorators: [
    (Story) => {
      return (
        <Box>
          I'm at the background
          <Story />
        </Box>
      );
    },
  ],
} as Meta;

const Template: Story<LargeNotificationWithBackdropProps> = (args) => (
  <LargeNotificationWithBackdrop {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
