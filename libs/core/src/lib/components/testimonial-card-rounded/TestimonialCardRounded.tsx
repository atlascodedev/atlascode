import { Avatar, Box, Paper, PaperProps, Stack } from '@material-ui/core';
import { addQuotes } from  "@atlascode/jss-mixins";
import { webkitVerticalTruncate } from '@atlascode/jss-mixins'

export type TestimonialCardPaperProps = Pick<PaperProps, 'elevation'>;

export interface TestimonialCardRoundedProps {
  name: string;
  identification: string;
  testimonial: string;
  color: 'primary' | 'secondary';
  PaperProps?: TestimonialCardPaperProps;
  square?: boolean;
  maximumLines?: number;
  desktopMaximumLines?: number;
}

export function TestimonialCardRounded({
  color = 'primary',
  PaperProps,
  identification,
  name,
  square,
  testimonial,
  maximumLines,
  desktopMaximumLines,
}: TestimonialCardRoundedProps) {
  return (
    <Paper
      sx={{
        fontSize: '1.65rem',
        width: { xs: '33ch', md: '55ch', lg: '64ch' },
        bgcolor: (theme) => theme.palette[color].main,
        color: (theme) => theme.palette[color].contrastText,
        height: 'auto',
        minHeight: '18rem',
        overflow: 'hidden',
        borderRadius: square ? '0px' : '15px',
        p: { xs: '5rem 3rem 1.8rem 3rem', md: '5rem 7rem 1.8rem 3rem' },
      }}
      {...PaperProps}
    >
      <Box
        component="p"
        sx={{
          ...(addQuotes() as Record<string, unknown>),
          m: 0,
          ...(maximumLines
            ? (webkitVerticalTruncate(maximumLines) as Record<string, unknown>)
            : null),
          '@media(min-width: 1280px)': {
            ...(desktopMaximumLines
              ? (webkitVerticalTruncate(desktopMaximumLines) as Record<
                  string,
                  unknown
                >)
              : null),
          },
        }}
      >
        {testimonial}
      </Box>

      <Stack sx={{ mt: '3rem' }} direction="row" gap="1.5rem">
        <Avatar sx={{ width: '6.5rem', height: '6.5rem' }} />

        <Stack direction="column" justifyContent="center">
          <Box
            sx={{
              fontSize: { xs: '1.6rem', md: '2rem' },
              fontWeight: '700',
              color: (theme) => theme.palette[color].contrastText,
            }}
          >
            {name}
          </Box>
          <Box
            sx={{
              fontSize: { xs: '1.3rem', md: '1.6rem' },
              color: (theme) => theme.palette[color].contrastText,
            }}
          >
            {identification}
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default TestimonialCardRounded;
