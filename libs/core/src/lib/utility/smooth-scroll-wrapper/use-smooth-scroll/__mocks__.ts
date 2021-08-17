import faker from 'faker';

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



export function randomMockImage(
  width = 500,
  height = 500,
  category: FakerImageCategory = 'business'
) {
  return `${faker.image[category](width, height)}?random=${Math.round(
    Math.random() * 1000
  )}`;
}


