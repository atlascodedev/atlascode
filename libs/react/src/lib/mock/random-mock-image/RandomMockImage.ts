import faker from 'faker';
import { FakerImageCategory } from '../mock-image-list/mockImageList';

export function randomMockImage(
  width = 500,
  height = 500,
  category: FakerImageCategory = 'business'
) {
  return `${faker.image[category](width, height)}?random=${Math.round(
    Math.random() * 1000
  )}`;
}

export default randomMockImage;
