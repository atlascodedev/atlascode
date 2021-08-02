import { Box } from '@material-ui/core';
import { Property } from 'csstype';
import { AnimatePresence } from 'framer-motion';
import { ResponsiveStyleValue } from '../../typings/styling';
import { AtlasCSSVariant } from '../../utility/atlas-theme-provider/theme-utilities';
import MotionBox from '../../utility/motion-box/MotionBox';

/* eslint-disable-next-line */
export interface ImageCrossfadeProps {
  primaryImage: string;
  secondaryImage: string;
  swap?: boolean;
  size?: ResponsiveStyleValue<Property.FontSize<string>>;
  fitContainer?: boolean;
}

const imageSize = (
  size: ResponsiveStyleValue<Property.FontSize<string>> | 'fullWidth',
  fitContainer: boolean
): AtlasCSSVariant => {
  if (fitContainer) {
    return {
      width: '100%',
      height: '100%',
      position: 'relative',
    };
  } else {
    return {
      fontSize: size,
      width: '20em',
      height: '20rem',
      position: 'relative',
    };
  }
};

export function ImageCrossfade({
  primaryImage,
  secondaryImage,
  swap,
  size = '1rem',
  fitContainer = false,
}: ImageCrossfadeProps) {
  return (
    <Box
      sx={{
        ...(imageSize(size, fitContainer) as Record<string, unknown>),
        position: 'relative',
      }}
    >
      <AnimatePresence>
        {!swap && primaryImage && (
          <MotionBox
            initial="visible"
            exit="visible"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
            }}
            sx={{
              width: '100%',
              height: '100%',
            }}
          >
            <Box
              component="img"
              src={primaryImage}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            />
          </MotionBox>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {swap && secondaryImage && (
          <MotionBox
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
            }}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          >
            <Box
              component="img"
              src={secondaryImage}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            />
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default ImageCrossfade;
