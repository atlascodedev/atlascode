import faker from 'faker';
import randomMockImage from '../random-mock-image/RandomMockImage';

export type FakerImageCategory = keyof typeof faker['image'];

export const mockImageList = (
  amount: number,
  width = 500,
  height = 500,
  category: FakerImageCategory = 'animals'
) => {
  const resultArray = [];

  for (let i = 0; i < amount; i++) {
    resultArray.push(randomMockImage(width, height, category));
  }

  return resultArray;
};

export default mockImageList;
