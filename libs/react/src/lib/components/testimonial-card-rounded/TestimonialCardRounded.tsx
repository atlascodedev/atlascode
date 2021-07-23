import { Avatar, Box, Paper, PaperProps, Stack } from '@material-ui/core';
import fadeTextTruncate from '../../mixins/fade-text-truncate/FadeTextTruncate';
import { webkitVerticalTruncate } from '../../mixins/webkit-vertical-truncate/WebkitVerticalTruncate';

export type TestimonialCardPaperProps = Pick<PaperProps, 'elevation'>;

export interface TestimonialCardRoundedProps {
  name: string;
  identification: string;
  color: 'primary' | 'secondary';
  PaperProps?: TestimonialCardPaperProps;
  square?: boolean;
}

export function TestimonialCardRounded({
  color = 'primary',
  PaperProps,
  identification,
  name,
  square,
}: TestimonialCardRoundedProps) {
  return (
    <Paper
      sx={{
        fontSize: '1.65rem',
        width: { xs: '31ch', md: '50ch' },
        bgcolor: (theme) => theme.palette[color].main,
        color: (theme) => theme.palette[color].contrastText,
        height: 'auto',
        overflow: 'hidden',
        borderRadius: square ? '0px' : '15px',
        p: { xs: '5rem 3rem 1.8rem 3rem', md: '5rem 7rem 1.8rem 3rem' },
      }}
      {...PaperProps}
    >
      <Box
        component="p"
        sx={{
          m: 0,
          ...(webkitVerticalTruncate(10) as Record<string, unknown>),
          '@media(min-width: 1280px)': {
            ...(webkitVerticalTruncate(3) as Record<string, unknown>),
          },
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, natus
        repellendus dignissimos enim animi corrupti earum nesciunt odit
        similique labore quod maxime vero quia recusandae doloremque distinctio
        expedita architecto est ea quae assumenda modi autem aliquid. Fuga
        maxime nemo neque dolorum! Quod quibusdam ipsa maxime numquam impedit
        quae explicabo repellat, a cupiditate dicta, autem placeat! Ducimus rem
        veniam consectetur beatae unde quis odio minus perspiciatis voluptas at,
        laudantium ratione necessitatibus sequi eaque praesentium, tempora,
        velit libero vero iste distinctio consequuntur! Quibusdam dolorum
        repellat repudiandae necessitatibus eum architecto consequatur. Esse
        tempore error odio sunt ipsam. Alias pariatur qui consectetur vel dolore
        doloribus nemo? Cupiditate error vero numquam libero minus adipisci
        optio quos dolorem porro. Repudiandae iure ea ad tenetur tempore
        quibusdam praesentium tempora iusto asperiores recusandae! Qui
        temporibus cupiditate numquam perferendis atque voluptatum voluptates
        quas eveniet, vitae sunt illo similique aspernatur, soluta amet
        reiciendis perspiciatis! Provident nihil aut sed minus, magnam libero
        ratione saepe molestias facilis nemo neque sapiente. Molestiae in,
        quidem a natus sit enim quia reiciendis accusantium. In exercitationem
        distinctio commodi id quos. Sed veniam, natus consequuntur quidem
        nesciunt nostrum ipsa voluptatem exercitationem esse tempora repudiandae
        incidunt. Dolorem obcaecati ex sapiente, recusandae temporibus nam
        nostrum, eum officiis fugiat cumque placeat possimus velit dignissimos
        voluptate pariatur similique ipsam sed ad laboriosam blanditiis! Iusto
        cum neque minima voluptate reprehenderit nam molestias ratione nemo ut
        architecto assumenda veniam omnis aliquid excepturi eius placeat quod
        temporibus, officiis, recusandae doloribus. Non, reprehenderit magnam,
        cupiditate ut cumque repellat facere id soluta tempora neque eaque
        dolor!
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
