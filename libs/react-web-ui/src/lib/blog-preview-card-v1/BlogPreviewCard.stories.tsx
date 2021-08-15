import { Story, Meta } from '@storybook/react';
import { BlogPreviewCard, BlogPreviewCardProps } from './BlogPreviewCard';
import faker from 'faker';
import randomMockImage from '../../mock/random-mock-image/RandomMockImage';

export default {
  component: BlogPreviewCard,
  title: 'AtlasCode/Cards/Blog Preview Card',
  decorators: [
    (Story) => {
      return (
        <div style={{ margin: '50px' }}>
          <Story />
        </div>
      );
    },
  ],
} as Meta;

const Template: Story<BlogPreviewCardProps> = (args) => (
  <BlogPreviewCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  content: faker.lorem.lines(50),
  readingTime: true,
  title: 'Lorem ipsum title dundun lelel',
  thumbnail: randomMockImage(),
  tags: ['marketing digital', 'teste 1', 'teste2'],
};
