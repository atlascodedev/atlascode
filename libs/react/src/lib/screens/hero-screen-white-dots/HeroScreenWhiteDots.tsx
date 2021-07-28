import { generateCSSFilter } from '@atlascode/helpers';
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
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
  blobColor = 'primary',
  desktopPicture,
  picture,
}: HeroScreenWhiteDotsProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [blobFilter, setBlobFilter] = React.useState<string>('none');

  React.useEffect(() => {
    const filterResult = generateCSSFilter(theme.palette[blobColor].main);

    setBlobFilter(filterResult);
  }, [blobColor, theme.palette]);

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#fff',
        backgroundImage: `radial-gradient(${patternColor} ${patternSize}, ${backgroundColor} ${patternSize})`,
        backgroundSize: '10px 10px',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '40% 60%' },
          gridTemplateRows: { xs: '50% 50%', lg: 'none' },
          alignContent: 'stretch',
          height: '100%',
          px: { xs: '1em', sm: '2em', lg: '7em' },
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
              fontSize: { xs: '4vh', lg: '6vh' },
              fontWeight: '900',
              color: (theme) => theme.palette.primary.main,
            }}
          >
            O futuro da sua carreira está em suas mãos.
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: ['2vh', null, null, '2.5vh', '2.75vh'],
              color: (theme) => theme.palette.grey[600],
            }}
          >
            Conheça os nossos cursos de pós-graduação e extensão em Medicina à
            distância.
          </Typography>

          <Button
            sx={{
              textTransform: 'inherit',
              fontSize: { xs: '1rem', md: '1.3', lg: '1.5rem' },
            }}
            variant="kota"
            color="primary"
            size="large"
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
              filter: blobFilter,
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
