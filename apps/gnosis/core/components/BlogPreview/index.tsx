import { LatestBlogPosts, LatestBlogPostsProps } from '@atlascode/react-core';
import { Box } from '@material-ui/core';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlogPreviewProps extends LatestBlogPostsProps {}

const BlogPreview = (props: BlogPreviewProps) => {
  return (
    <Box>
      <LatestBlogPosts {...props} />
    </Box>
  );
};

export default BlogPreview;
