import { Story, Meta } from '@storybook/react';

import { OfferCard, OfferCardItem, OfferCardProps } from './OfferCard';
import faker from 'faker';
import { Box } from '@material-ui/core';

export default {
  component: OfferCard,
  title: 'AtlasCode/Cards/OfferCard',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          sx={{
            p: { xs: '1rem', lg: '3rem' },
          }}
        >
          <Story />
        </Box>
      );
    },
  ],
} as Meta;

const Template: Story<OfferCardProps> = (args) => <OfferCard {...args} />;

export const Primary = Template.bind({});

// Primary.args = {
//   img: randomMockImage(),
//   items: offerCardItemMock(),
//   redirectLink: faker.internet.domainName(),
//   title: faker.name.jobArea(),
// };
