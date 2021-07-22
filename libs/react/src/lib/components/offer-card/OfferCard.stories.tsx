import { Story, Meta } from '@storybook/react';
import {
  MdAccessible,
  MdAdd,
  MdWeekend,
  MdWifiLock,
  MdYoutubeSearchedFor,
  MdZoomOut,
} from 'react-icons/md';
import { OfferCard, OfferCardItem, OfferCardProps } from './OfferCard';
import faker from 'faker';
import { random } from 'lodash';
import randomMockImage from '../../mock/random-mock-image/RandomMockImage';
import { Box } from '@material-ui/core';

export const offerCardItemMock = () => {
  const mockItems: OfferCardItem[] = [];
  const assortedIcons = [
    MdZoomOut,
    MdYoutubeSearchedFor,
    MdWifiLock,
    MdAccessible,
    MdAdd,
    MdWeekend,
  ];

  Array.from([1, 2]).forEach((value, index) => {
    mockItems.push({
      icon: assortedIcons[random(0, assortedIcons.length - 1)],
      text: faker.name.jobTitle(),
    });
  });

  return mockItems;
};

export const offerCardFullMock = (amount: number) => {
  const mockCardFull: OfferCardProps[] = [];

  for (let i = 0; i < amount; i++) {
    const offerCardTemp: OfferCardProps = {
      img: randomMockImage(),
      items: offerCardItemMock(),
      redirectLink: faker.internet.domainName(),
      title: faker.name.jobArea(),
    };

    mockCardFull.push(offerCardTemp);
  }

  return mockCardFull;
};

export default {
  component: OfferCard,
  title: 'OfferCard',
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

Primary.args = {
  img: randomMockImage(),
  items: offerCardItemMock(),
  redirectLink: faker.internet.domainName(),
  title: faker.name.jobArea(),
};
