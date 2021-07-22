import { Box } from '@material-ui/core';
import { Story, Meta } from '@storybook/react';
import { offerCardFullMock } from '../offer-card/OfferCard.stories';
import { OfferSlider, OfferSliderProps } from './OfferSlider';

export default {
  component: OfferSlider,
  title: 'OfferSlider',
  decorators: [
    (Story) => {
      return (
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: 'auto',
            }}
          >
            <Story></Story>
          </Box>
        </Box>
      );
    },
  ],
} as Meta;

const Template: Story<OfferSliderProps> = (args) => <OfferSlider {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items: offerCardFullMock(10),
};
