import { Box, colors, Typography } from '@material-ui/core';
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
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        backgroundColor: '#fff',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '40% 60%' },
        gridTemplateRows: { xs: '50% 50%', md: 'none' },
        backgroundImage: `radial-gradient(${patternColor} ${patternSize}, ${backgroundColor} ${patternSize})`,
        backgroundSize: '10px 10px',
        ...styleOverride,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'flex-start' },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '34px', md: '48px' },
            fontWeight: 'black',
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
      </Box>

      <Box></Box>
    </Box>
  );
}

export default HeroScreenWhiteDots;
