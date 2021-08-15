import faker from 'faker';

export function randomMockImage(
  width = 500,
  height = 500,
  category: "business"
) {
  return `${faker.image[category](width, height)}?random=${Math.round(
    Math.random() * 1000
  )}`;
}

export default randomMockImage;
