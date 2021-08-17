import { CSSInterpolation } from '@material-ui/system';

export const backGroundZoom = (
  variant: 'backgroundImage' | 'objectFit',
  duration = 5
): CSSInterpolation => {
  const objectFitVariant = {
    '& > :first-child': {
      transition: `${duration}s`,
      ':hover': {
        transform: `scale(1.3)`,
      },
    },
  };

  const backgroundImageVariant = {
    trasition: `${duration}s`,
    ':hover': {
      backgroundSize: '130%',
    },
  };

  const zoomVariant =
    variant === 'objectFit' ? objectFitVariant : backgroundImageVariant;

  return {
    overflow: 'hidden',
    ...zoomVariant,
  };
};

export default backGroundZoom;
