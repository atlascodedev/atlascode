import { Story, Meta } from '@storybook/react';
import { BlogLayoutV1, BlogLayoutV1Props } from './BlogLayoutV1';
import faker from 'faker';
import randomMockImage from '../../mock/random-mock-image/RandomMockImage';
import { HTMLLorem } from './__mocks__';
import { Box } from '@material-ui/core';

export default {
  component: BlogLayoutV1,
  title: 'BlogLayoutV1',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    content: {
      table: {
        disable: true,
      },
    },
    date: {
      table: {
        disable: true,
      },
    },
    socials: {
      table: {
        disable: true,
      },
    },
    latestPosts: {
      table: {
        disable: true,
      },
    },
    tags: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box sx={{ mt: { xs: '30px', md: '50px', lg: '75px', xl: '95px' } }}>
          <Story />
        </Box>
      );
    },
  ],
} as Meta;

const Template: Story<BlogLayoutV1Props> = (args) => <BlogLayoutV1 {...args} />;

const blogPostData = {
  content: HTMLLorem,
  readingTime: true,
  date: faker.date.past(),
  featuredImage: randomMockImage(1000, 600),
  socials: {
    facebook: 'https://facebok.com/lorem',
    instagram: 'https://instagram.com/lorem',
    twitter: 'https://twitter.com/lorem',
  },
  title: faker.company.bs(),
};

export const Primary = Template.bind({});
Primary.args = {
  content: HTMLLorem,
  readingTime: true,
  date: faker.date.past(),
  featuredImage: randomMockImage(1000, 600),
  socials: {
    facebook: 'https://facebok.com/lorem',
    instagram: 'https://instagram.com/lorem',
    twitter: 'https://twitter.com/lorem',
  },
  title: faker.company.bs(),
  latestPosts: [blogPostData, blogPostData, blogPostData],
};
