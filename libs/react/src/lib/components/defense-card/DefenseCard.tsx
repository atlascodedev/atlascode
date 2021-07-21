import { CardProps, Box, Paper, PaperProps } from '@material-ui/core';
import { ResponsiveStyleValue } from '@material-ui/system';
import { IconType } from 'react-icons';

type DefenseCardPaperProps = Partial<
  Pick<PaperProps, 'elevation' | 'square' | 'variant'>
>;

interface ResponsiveFontsize {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface DefenseCardProps extends DefenseCardPaperProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: IconType;
  text: string;
  color?: 'primary' | 'secondary';
  fontSize: string;
}

export function DefenseCard({
  icon: IconComponent,
  color = 'primary',
  text,
  elevation = 2,
  square,
  variant = 'elevation',
  fontSize = '0.8rem',
  ...props
}: DefenseCardProps) {
  return (
    <Box
      sx={{
        fontSize: fontSize,
      }}
    >
      <Paper
        variant={variant}
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: 'grid',
          gridTemplateColumns: '35% 65%',
          width: '37em',
          borderRadius: square ? '0px' : '10px',
          alignItems: 'center',
          padding: '2.85em 2.15em',
        }}
        elevation={elevation}
        {...props}
      >
        <Box
          sx={{
            fontSize: '6em',
            color: (theme) =>
              color === 'primary'
                ? theme.palette.secondary.main
                : theme.palette.primary.main,
          }}
          component={IconComponent}
        ></Box>
        <Box
          component="h3"
          sx={{
            maxWidth: '20ch',
            m: 0,
            fontWeight: 600,
            fontSize: '1.8em',
            color: (theme) => theme.palette[color].main,
          }}
        >
          {text}
        </Box>
      </Paper>
    </Box>
  );
}

export default DefenseCard;
