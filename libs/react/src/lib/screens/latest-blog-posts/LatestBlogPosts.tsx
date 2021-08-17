import { Box, Button } from '@material-ui/core';
import BlogPreviewCard, {
  BlogPreviewCardProps,
} from '../../components/blog-preview-card/BlogPreviewCardV1';
import useLoadMore from '../../hooks/use-load-more/UseLoadMore';
import MotionBox from '../../utility/motion-box/MotionBox';

/* eslint-disable-next-line */
export interface LatestBlogPostsProps {
  items?: BlogPreviewCardProps[];
}

export function LatestBlogPosts({ items = [] }: LatestBlogPostsProps) {
  const { fullData, loadMore, visible, fullyLoaded } = useLoadMore(items, 3);

  console.log(visible, fullData);

  return (
    <MotionBox layout sx={{ width: '100%', position: 'relative' }}>
      <MotionBox
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' },
          gridAutoFlow: 'row',
          height: '100%',
          rowGap: '4rem',
          justifyItems: 'center',
        }}
        layout
        transition={{
          staggerChildren: 0.25,
          bounce: 0,
        }}
        initial="hidden"
        animate="visible"
      >
        {visible.map((value, index) => {
          return (
            <MotionBox
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                damping: 2000,
                mass: 100,
                stiffness: 500,
              }}
              key={index}
              sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <BlogPreviewCard {...value} />
            </MotionBox>
          );
        })}
      </MotionBox>

      <Box
        onClick={loadMore}
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          py: '5rem',
        }}
      >
        <Button variant="outlined" disabled={fullyLoaded}>
          {fullyLoaded ? 'Não há mais posts' : 'Carregar mais'}
        </Button>
      </Box>
    </MotionBox>
  );
}

export default LatestBlogPosts;
