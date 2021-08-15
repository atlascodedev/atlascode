import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';
import { IconType } from 'react-icons/lib';
import {backGroundZoom} from "@atlascode/jss-mixins"

export interface OfferCardItem {
  icon: IconType;
  text: string;
}

export interface OfferCardProps {
  img: string;
  title: string;
  items: OfferCardItem[];
  redirectLink: string;
  zoomEffect?: boolean;
}

export function OfferCard({
  img,
  items,
  redirectLink,
  title,
  zoomEffect,
}: OfferCardProps) {
  return (
    <Box sx={{ maxWidth: { xs: '30rem', lg: '34rem' } }}>
      <Card sx={{ maxWidth: '100%', borderRadius: '11px' }}>
        <Box
          sx={{
            width: '100%',
            height: '19em',
            // eslint-disable-next-line @typescript-eslint/ban-types
            ...(zoomEffect ? (backGroundZoom('objectFit') as {}) : {}),
          }}
        >
          <Box
            component="img"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            src={img}
          ></Box>
        </Box>
        <CardContent
          sx={{
            px: '2.7em',
            pb: '0em',
            pt: '0em',
          }}
        >
          <Typography
            sx={{
              fontSize: '2em',
              fontWeight: '600',
              color: (theme) => theme.palette.primary.main,
              m: '0em',
              py: '1em',
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5em' }}>
            {items.map(({ icon: Icon, text }, index) => {
              return (
                <Box
                  sx={{ display: 'flex', alignItems: 'center', gap: '1.5em' }}
                  key={index}
                >
                  <Box
                    sx={{
                      fontSize: '1.8em',
                      color: (theme) => theme.palette.primary.main,
                    }}
                    component={Icon}
                  />
                  <Typography
                    sx={{
                      fontSize: '1.6em',
                      color: (theme) => theme.palette.grey[500],
                    }}
                    component="sub"
                  >
                    {text}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </CardContent>
        <CardActions sx={{ px: '2.7em', pt: '2em', pb: '2em' }}>
          <Button
            color="primary"
            LinkComponent={'a'}
            href={redirectLink}
            target={'_blank'}
            sx={{
              fontSize: '1.8em',
              textTransform: 'inherit',
              fontWeight: '600',
            }}
          >
            Saiba mais
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default OfferCard;
