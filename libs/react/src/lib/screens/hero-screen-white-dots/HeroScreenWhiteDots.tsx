import { Box, colors } from '@material-ui/core';

/* eslint-disable-next-line */
export interface HeroScreenWhiteDotsProps {
  patternColor?: string;
  patternSize?: string;
  backgroundColor?: string;
}

export function HeroScreenWhiteDots({
  patternColor = '#bbbbbb60',
  patternSize = '0.8px',
  backgroundColor = '#fff',
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
      }}
    >
      <Box></Box>

      <Box></Box>
    </Box>
  );
}

export default HeroScreenWhiteDots;
