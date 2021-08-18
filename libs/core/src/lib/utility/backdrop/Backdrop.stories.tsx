import { Box } from '@material-ui/system';
import { Story, Meta } from '@storybook/react';
import { Backdrop, BackdropProps } from './Backdrop';

export default {
  component: Backdrop,
  title: 'Backdrop',
  decorators: [
    (Story) => {
      return (
        <Box sx={{ height: '500vh', width: '100%' }}>
          <Story />
        </Box>
      );
    },
  ],
} as Meta;

const Template: Story<BackdropProps> = (args) => <Backdrop {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
