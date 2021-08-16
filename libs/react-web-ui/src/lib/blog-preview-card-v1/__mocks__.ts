import faker from 'faker';
import { BlogPreviewCardProps } from './BlogPreviewCardV1';

export const blogPreviewCardMockData = (amount: number) => {
  const outArray: BlogPreviewCardProps[] = [];

  for (let i = 0; i < amount; i++) {
    const blogPreviewCardLocal: BlogPreviewCardProps = {
      content: faker.lorem.lines(Math.floor(Math.random() * 50 + 1)),
      readingTime: true,
      title: faker.company.catchPhrase(),
      tags: [
        faker.commerce.department(),
        faker.commerce.department(),
        faker.commerce.department(),
      ],
      thumbnail: faker.image.business(500, 300),
    };

    outArray.push(blogPreviewCardLocal);
  }

  return outArray;
};
