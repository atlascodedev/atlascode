import React from 'react';
import { Box } from '@material-ui/core';
import { Story, Meta } from '@storybook/react';
import {
  LargeNotificationWithBackdrop,
  LargeNotificationWithBackdropProps,
} from './LargeNotificationWithBackdrop';
import faker from 'faker';

export default {
  component: LargeNotificationWithBackdrop,
  title: 'AtlasCode/Composite/Large Notification - Blur backdrop',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            backgroundImage: `url(${faker.image.business(2000, 2000)})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Story />
        </Box>
      );
    },
  ],
} as Meta;

const Template: Story<LargeNotificationWithBackdropProps> = (args) => {
  return <LargeNotificationWithBackdrop {...args} />;
};
export const Primary = Template.bind({});
Primary.args = {};
