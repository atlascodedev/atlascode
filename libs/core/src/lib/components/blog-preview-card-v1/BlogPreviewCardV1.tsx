import { Box, Chip, Stack } from '@material-ui/core';
import { IoMdTime } from 'react-icons/io';
import React from 'react';
import { getReadingTime } from '@atlascode/helpers';
import { webkitVerticalTruncate } from '@atlascode/jss-mixins'

/* eslint-disable-next-line */
export interface BlogPreviewCardProps {
  content: string;
  title: string;
  readingTime: boolean | number;
  tags: string[];
  thumbnail: string;
  rounded?: boolean;
  color?: 'primary' | 'secondary';
}

export function BlogPreviewCard({
  content,
  readingTime,
  tags,
  title,
  color = 'secondary',
  thumbnail,
  rounded = true,
}: BlogPreviewCardProps) {
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
    <Stack sx={{ maxWidth: '32rem' }} direction="column" gap="1.5rem">
      {readingTime && content && (
        <Stack direction="row" gap="0.85rem" alignItems="flex-end">
          <Box
            sx={{
              color: (theme) => theme.palette[color].main,
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
      <Box
        sx={{
          overflow: 'hidden',
          width: '32rem',
          height: '25rem',
          borderRadius: rounded ? '10px' : '0px',
        }}
      >
        <Box
          component="img"
          sx={{
            objectFit: 'cover',
            width: '100%',
            height: 'auto',
            borderRadius: rounded ? '10px' : '0px',
          }}
          src={thumbnail}
        />
      </Box>

      <Box
        sx={{
          fontSize: {
            xs: '1.6rem',
            md: '2rem',
          },
          color: (theme) => theme.palette.primary.main,
          fontWeight: 700,
          ...(webkitVerticalTruncate(2) as Record<string, unknown>),
        }}
      >
        {title}
      </Box>

      <Stack gap="1rem" direction="row">
        {tags.map((tag, index) => {
          return (
            <Chip
              key={index}
              size="small"
              clickable
              label={`#${tag}`}
              variant="filled"
              color={color}
            />
          );
        })}
      </Stack>
    </Stack>
  );
}

export default BlogPreviewCard;
