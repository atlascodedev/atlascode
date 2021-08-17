import { Story, Meta } from '@storybook/react';
import { LatestBlogPosts, LatestBlogPostsProps } from './LatestBlogPosts';

export default {
  component: LatestBlogPosts,
  title: 'AtlasCode/Screens/Blog Posts Preview',
} as Meta;

const Template: Story<LatestBlogPostsProps> = (args) => (
  <LatestBlogPosts {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  items: [],
};
