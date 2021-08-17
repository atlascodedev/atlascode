import {
  LatestBlogPosts,
  LatestBlogPostsProps,
  polkaPattern,
} from '@atlascode/core';
import { Box } from '@material-ui/core';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlogPreviewProps extends LatestBlogPostsProps {}

const BlogPreview = (props: BlogPreviewProps) => {
  return (
    <Box sx={{ width: '100%', py: '8rem', position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -1,
          top: 0,
          left: 0,
          ...(polkaPattern('#fff', 0.4, 50, '#646464') as Record<
            string,
            unknown
          >),
        }}
      />

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          color: (theme) => theme.palette.primary.main,
          fontWeight: 700,
          fontSize: { xs: '2.2rem', lg: '3.2rem' },
          pb: { xs: '5rem', md: '6.5rem', lg: '8rem' },
        }}
      >
        Últimas postagens
      </Box>

      <LatestBlogPosts {...props} />
    </Box>
  );
};

export default BlogPreview;
