import { Story, Meta } from '@storybook/react';
import { BlogPreviewCard, BlogPreviewCardProps } from './BlogPreviewCardV1';
import faker from 'faker';

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
  thumbnail: faker.image.business(1000, 6000),
  tags: ['marketing digital', 'teste 1', 'teste2'],
};
