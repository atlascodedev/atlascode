import * as faker from 'faker';
import {
  OfferCardItem,
  OfferCardProps,
} from '@atlascode/react-web-ui'
import randomMockImage from '../random-mock-image/RandomMockImage';

export function mockOfferCardList(amount: number) {
  const outArray: OfferCardProps[] = [];

  for (let i = 0; i < amount; i++) {
    let offerCardTemp: OfferCardProps = {};
    let offerCardItemTemp: OfferCardItem = {};

    offerCardTemp.img = randomMockImage();
    offerCardItemTemp = {
        icon:
    }

    outArray.push();
  }
}
