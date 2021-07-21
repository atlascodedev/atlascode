import { Box } from '@material-ui/core';
import { Story, Meta } from '@storybook/react';
import {
  HeroScreenWhiteDots,
  HeroScreenWhiteDotsProps,
} from './HeroScreenWhiteDots';

export default {
  component: HeroScreenWhiteDots,
  title: 'AtlasCode/Screens/Hero screen - white - dots background pattern',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'brazilDesktop1',
    },
  },
} as Meta;

const Template: Story<HeroScreenWhiteDotsProps> = (args) => (
  <HeroScreenWhiteDots {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  picture: (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        objectFit: ['cover', 'contain', null, null, null],
        position: 'absolute',
      }}
      component="img"
      src="./images/young-doc-female.png"
    ></Box>
  ),
  desktopPicture: (
    <Box
      sx={{
        pt: { xs: '100px' },
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
      }}
      component="img"
      src="./images/hero-doc.png"
    ></Box>
  ),
};
