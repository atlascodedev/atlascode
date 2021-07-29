import { Box } from '@material-ui/core';
import { Story, Meta } from '@storybook/react';
import {
  MinimalFormPicOverBlob,
  MinimalFormPicOverBlobProps,
} from './MinimalFormPicOverBlob';

const PicComponent = () => {
  return (
    <Box
      sx={{
        pt: '125px',
        width: '100%',
        height: '100%',
        objectFit: { xs: 'cover', lg: 'contain' },
        bottom: 0,
        position: 'absolute',
      }}
      component="img"
      src="./images/young-doc-female-2.png"
    ></Box>
  );
};

export default {
  component: MinimalFormPicOverBlob,
  title: 'MinimalFormPicOverBlob',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      return (
        <Box sx={{ px: '4rem' }}>
          <Story />
        </Box>
      );
    },
  ],
} as Meta;

const Template: Story<MinimalFormPicOverBlobProps> = (args) => (
  <MinimalFormPicOverBlob {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  picture: <PicComponent />,
};
