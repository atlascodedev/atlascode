/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { alpha, Box, Container, Stack } from '@material-ui/core';
import { getReadingTime } from '@atlascode/helpers';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoMdTime,
} from 'react-icons/io';
import BlogPreviewCard from '../../components/blog-preview-card/BlogPreviewCardV1';
import _ from 'lodash';
import { useInView } from 'react-intersection-observer';
import MotionBox from '../../utility/motion-box/MotionBox';
import { AnimatePresence } from 'framer-motion';
import IconButtonCircle from '../../components/icon-button-circle/IconButtonCircle';

interface SocialMediaRef {
  facebook: string;
  instagram: string;
  twitter: string;
}

interface BlogPost {
  title?: string;
  readingTime: boolean | number;
  featuredImage?: string;
  date?: string | Date;
  tags?: string[];
  content?: string;
}

/* eslint-disable-next-line */
export interface BlogLayoutV1Props extends BlogPost {
  socials?: Partial<SocialMediaRef>;
  latestPosts?: BlogPost[];
}

export function BlogLayoutV1({
  readingTime,
  date,
  featuredImage,
  latestPosts,
  socials,
  tags,
  title,
  content = '',
}: BlogLayoutV1Props) {
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  console.log(inView);

  const [readingTimeState, setReadingTime] = React.useState<
    ReturnType<typeof getReadingTime> | number
  >(0);

  React.useEffect(() => {
    if (typeof readingTime === 'number') {
      setReadingTime(readingTime);
    } else {
      let readingTimeInner = getReadingTime(content).readTime;

      if (readingTimeInner < 1) {
        readingTimeInner = Math.ceil(readingTimeInner);
      } else {
        readingTimeInner = Math.floor(readingTimeInner);
      }

      setReadingTime(readingTimeInner);
    }
  }, [content, readingTime]);

  return (
    <Box
      id="Atlas-BlogLayoutV1-root"
      sx={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        fontFamily: 'inherit',
        position: 'relative',
        textRendering: 'optimizeLegibility',
        fontSmooth: 'always',
        fontSize: '1rem',
      }}
    >
      <AnimatePresence>
        {inView && (
          <MotionBox
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
            }}
            id="Atlas-BlogLayoutV1-socialMediaTray-container"
            sx={{
              position: 'fixed',
              top: 0,
              right: 0,
              transform: {
                display: { xs: 'none', lg: 'block' },
                lg: 'translate(-20px, 90px)',
                xl: 'translate(-150px, 90px)',
              },
            }}
          >
            <Box
              id="Atlas-BlogLayoutV1-socialMediaTray-flexContainer"
              sx={{
                borderLeft: (theme) =>
                  `5px solid ${theme.palette.primary.main}`,
                borderRadius: '4px',
                p: '15px',
                width: '225px',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
              }}
            >
              <Box
                id="Atlas-BlogLayoutV1-socialMediaTray-label"
                sx={{
                  color: (theme) => theme.palette.grey[600],
                  fontSize: '16px',
                }}
              >
                Compartilhe a postagem nas suas redes sociais
              </Box>

              <Stack
                id="Atlas-BlogLayoutV1-socialMediaTray-iconsContainer"
                direction="row"
                gap="2.5rem"
              >
                <IconButtonCircle
                  size="small"
                  elevation
                  href="https://atlascode.dev"
                  variant="contained"
                  icon={IoLogoFacebook}
                />
                <IconButtonCircle
                  size="small"
                  elevation
                  variant="contained"
                  icon={IoLogoInstagram}
                />
                <IconButtonCircle
                  size="small"
                  elevation
                  variant="contained"
                  icon={IoLogoWhatsapp}
                />
              </Stack>
            </Box>
          </MotionBox>
        )}
      </AnimatePresence>
      <Box sx={{ width: '100%' }} id="Atlas-BlogLayoutV1-container">
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            px: '20px',
          }}
          id="Atlas-BlogLayoutV1-header"
        >
          <Stack
            id="Atlas-BlogLayoutV1-headerInnerContainer"
            sx={{ gap: '10px' }}
            direction="column"
          >
            <Box
              component="h1"
              sx={{
                m: 0,
                p: 0,
                fontWeight: 600,
                fontSize: { xs: '3.5vh', lg: '5vh' },
                textTransform: 'capitalize',
              }}
              id="Atlas-BlogLayoutV1-title"
            >
              {title}
            </Box>
            {readingTime && content && (
              <Stack
                id="Atlas-BlogLayoutV1-readingTime"
                direction="row"
                gap="0.85rem"
                alignItems="flex-end"
              >
                <Box
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontSize: '1.5rem',
                  }}
                  component={IoMdTime}
                />
                <Box
                  sx={{
                    fontWeight: 700,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >{`${readingTimeState} minuto${
                  readingTimeState > 1 ? 's' : ''
                } de leitura`}</Box>
              </Stack>
            )}
          </Stack>
        </Box>

        <Container
          id="Atlas-BlogLayoutV1-featuredImage-container"
          maxWidth="md"
          sx={{ p: 0, my: '3.5em' }}
        >
          <Box
            component="figure"
            sx={{
              width: '100%',
              height: 'auto',
              position: 'relative',
              m: 0,
              p: 0,
            }}
            id="Atlas-BlogLayoutV1-featuredImage-figure"
          >
            <Box
              id="Atlas-BlogLayoutV1-featuredImage"
              src={featuredImage}
              component="img"
              sx={{
                maxWidth: '100%',
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Container>

        <Container
          ref={ref}
          sx={{
            mt: '3.5em',
            maxWidth: { sm: '680px' },
            px: '24px',
            position: 'relative',

            '*': {
              fontSize: 'clamp(16px, 18px, 30px)!important',
              wordBreak: 'break-word',
              wordWrap: 'break-word',
              letterSpacing: { xs: '-0.003px' },
              lineHeight: { xs: '42px' },
            },
          }}
          id="Atlas-BlogLayoutV1-contentContainer"
        >
          <Box
            id="Atlas-BlogLayoutV1-content"
            sx={{ width: '100%' }}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Container>
        {latestPosts && latestPosts.length > 0 && (
          <Box
            sx={{
              width: '100%',
              bgcolor: (theme) => alpha(theme.palette.primary.light, 0.05),
              py: { xs: '45px', lg: '55px' },
              mt: { xs: '45px', lg: '55px' },
            }}
            id="Atlas-BlogLayoutV1-latestBlogs-container"
          >
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                color: (theme) => theme.palette.primary.main,
                mx: 0,
                px: 0,
                pb: { xs: '45px', lg: '55px' },
                fontWeight: 600,
                fontSize: { xs: '2.5vh', lg: '4vh' },
                textTransform: 'capitalize',
              }}
              id="Atlas-BlogLayoutV1-latestBlogs-containerTitle"
            >
              Últimos posts
            </Box>

            <Box
              id="Atlas-BlogLayoutV1-latestBlogs-postGrid"
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr 1fr' },
                gridTemplateRows: '1fr',
                gridAutoFlow: 'row',
                gap: '15px',
                justifyItems: 'center',
                alignItems: 'center',
              }}
            >
              {latestPosts.map((blogPost, index) => {
                return (
                  <BlogPreviewCard
                    content={blogPost.content!}
                    readingTime={true}
                    tags={blogPost.tags || ['Marketing', 'Development', 'AI']}
                    thumbnail={blogPost.featuredImage!}
                    title={blogPost.title!}
                  />
                );
              })}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default BlogLayoutV1;
