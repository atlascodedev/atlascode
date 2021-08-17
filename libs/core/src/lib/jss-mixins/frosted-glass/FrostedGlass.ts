import { SxProps } from '@material-ui/system';
import { isFirefox } from '../../helpers/assertions';

export const frostedGlassEffect = (): SxProps => {
  if (isFirefox()) {
    return {
      ':before': {
        content: '""',
        position: 'absolute',
        background: 'inherit',
        zIndex: 1000,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
        filter: 'blur(50px)',
        margin: '-20px',
      },
    };
  } else {
    return {
      backgroundColor: 'rgba(255, 255, 255, 0.45)',
      backdropFilter: 'blur(25px)',
    };
  }
};
