import * as faker from 'faker';
import { random } from 'lodash';
import {
  MdAccessible,
  MdAdd,
  MdWeekend,
  MdWifiLock,
  MdYoutubeSearchedFor,
  MdZoomOut,
} from 'react-icons/md';
import {OfferCardItem, OfferCardProps} from '@atlascode/react-web-ui'

import randomMockImage from '../random-mock-image/RandomMockImage';

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
