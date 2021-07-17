import {
  Color,
  Solver,
  hexToRgbFilter,
  generateCSSFilter,
} from '@atlascode/helpers';
import { Box, Button, colors, Container, Typography } from '@material-ui/core';
import React from 'react';
import { AtlasCSSVariant } from '../../utility/atlas-theme-provider/theme-utilities';

/* eslint-disable-next-line */
export interface HeroScreenWhiteDotsProps {
  patternColor?: string;
  patternSize?: string;
  backgroundColor?: string;
  styleOverride?: AtlasCSSVariant;
}

export function HeroScreenWhiteDots({
  patternColor = '#bbbbbb60',
  patternSize = '0.8px',
  backgroundColor = '#fff',
  styleOverride,
}: HeroScreenWhiteDotsProps) {
  // React.useEffect(() => {
  //   const rgb = hexToRgbFilter('#00a4d6');

  //   const color = new Color(rgb?.[0], rgb?.[1], rgb?.[2]);
  //   const solver = new Solver(color);

  //   const result = solver.solve();

  //   console.log(result.filter.split('filter: ').pop());
  // }, []);

  const cssFilter = generateCSSFilter('#00a4d6');

  console.log(cssFilter);

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#fff',
        backgroundImage: `radial-gradient(${patternColor} ${patternSize}, ${backgroundColor} ${patternSize})`,
        backgroundSize: '10px 10px',
        width: '100%',
        ...styleOverride,
      }}
    >
      <Container
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '40% 60%' },
          gridTemplateRows: { xs: '50% 50%', md: 'none' },
          alignContent: 'center',
          height: '100%',
          px: { xs: '0px', md: '55px' },
        }}
        maxWidth="xl"
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-start' },
            gap: { xs: '0px', md: '30px' },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '34px', md: '48px' },
              fontWeight: '900',
              color: (theme) => theme.palette.primary.main,
            }}
          >
            O futuro da sua carreira está em suas mãos.
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '14px', md: '20px' },
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
            margin: '0px',
          }}
        ></Box>
      </Container>
    </Box>
  );
}

export default HeroScreenWhiteDots;
