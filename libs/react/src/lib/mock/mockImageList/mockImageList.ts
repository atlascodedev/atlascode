import faker from 'faker';

type FakerImageCategory = keyof typeof faker['image'];

export const mockImageList = (
  amount: number,
  width = 500,
  height = 500,
  category: FakerImageCategory = 'animals'
) => {
  const resultArray = [];

  for (let i = 0; i < amount; i++) {
    resultArray.push(
      `${faker.image[category](width, height)}?random=${Math.round(
        Math.random() * 1000
      )}`
    );
  }

  return resultArray;
};

export default mockImageList;
