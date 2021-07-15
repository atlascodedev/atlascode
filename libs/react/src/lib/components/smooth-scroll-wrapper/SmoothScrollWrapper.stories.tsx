import { Box, ImageList } from '@material-ui/core';
import { Story, Meta } from '@storybook/react';
import {
  SmoothScrollWrapper,
  SmoothScrollWrapperProps,
} from './SmoothScrollWrapper';

export default {
  component: SmoothScrollWrapper,
  title: 'AtlasCode Utility/SmoothScrollWrapper',
  parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<SmoothScrollWrapperProps> = (args) => (
  <SmoothScrollWrapper {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <ImageList sx={{ width: '100%' }} cols={3} rowHeight={150}>
      {}
    </ImageList>
  ),
};
Primary.storyName = 'Smooth Scroll Wrapper';
