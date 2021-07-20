import { generateCSSFilter } from '@atlascode/helpers';
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import blob from './blob.svg';
import React from 'react';

/* eslint-disable-next-line */
export interface HeroScreenWhiteDotsProps {
  patternColor?: string;
  patternSize?: string;
  backgroundColor?: string;
  picture?: JSX.Element;
  desktopPicture?: JSX.Element;
  blobColor?: 'primary' | 'secondary';
}

export function HeroScreenWhiteDots({
  patternColor = '#bbbbbb60',
  patternSize = '1px',
  backgroundColor = '#fff',
  blobColor = 'secondary',
  desktopPicture,
  picture,
}: HeroScreenWhiteDotsProps) {
  const isDesktop = useMediaQuery('(min-width:1280px)');

  console.log(isDesktop);

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#fff',
        backgroundImage: `radial-gradient(${patternColor} ${patternSize}, ${backgroundColor} ${patternSize})`,
        backgroundSize: '10px 10px',
        width: '100%',
        overflow: 'hidden',
        fontSize: '1rem',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '40% 60%' },
          gridTemplateRows: { xs: '50% 50%', lg: 'none' },
          alignContent: 'stretch',
          height: '100%',
          px: { xs: '1em', sm: '2em' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-start' },
            justifyContent: { xs: 'flex-end', sm: 'center', lg: 'center' },
            gap: { xs: '30px', md: '30px' },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: '34px',
                md: '2.5rem',
                lg: '3.5rem',
                xl: '4.5rem',
              },
              fontWeight: '900',
              color: (theme) => theme.palette.primary.main,
            }}
          >
            O futuro da sua carreira está em suas mãos.
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '14px', sm: '20px', md: '20px' },
              color: (theme) => theme.palette.grey[600],
            }}
          >
            Conheça os nossos cursos de pós-graduação e extensão em Medicina à
            distância.
          </Typography>

          <Button
            sx={{
              textTransform: 'inherit',
            }}
            color="primary"
            variant="contained"
          >
            Ver cursos
          </Button>
        </Box>

        <Box
          component="figure"
          sx={{
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            transform: 'translate3D(0px, 0px, 0px)',
            m: '0px',
            p: { xs: '0px', md: '10px 0px 0px 10px' },
          }}
        >
          <Box
            sx={{
              width: '100%',
              position: 'absolute',
              zIndex: -1,
              height: '100%',
              filter: (theme) =>
                generateCSSFilter(theme.palette[blobColor].main),
            }}
            component="img"
            src={blob}
          ></Box>

          <Box
            sx={{
              width: '100%',
              height: '100%',
            }}
          >
            {isDesktop && desktopPicture ? desktopPicture : picture}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroScreenWhiteDots;
