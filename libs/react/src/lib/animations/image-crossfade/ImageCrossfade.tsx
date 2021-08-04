import { Box } from '@material-ui/core';
import { Property } from 'csstype';
import { AnimatePresence, AnimationControls } from 'framer-motion';
import { ResponsiveStyleValue } from '../../typings/styling';
import { AtlasCSSVariant } from '../../utility/atlas-theme-provider/theme-utilities';
import MotionBox from '../../utility/motion-box/MotionBox';

export interface ImageCrossfadeProps {
  primaryImage: string;
  secondaryImage: string;
  swap?: boolean;
  size?: ResponsiveStyleValue<Property.FontSize<string>>;
  fitContainer?: boolean;
  animationControls?: AnimationControls;
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

/**
 *
 * @description Animation Variants = "HIDDEN" | "VISIBLE"
 */
export function ImageCrossfade({
  primaryImage,
  secondaryImage,
  swap,
  size = '1rem',
  fitContainer = false,
  animationControls,
}: ImageCrossfadeProps) {
  return (
    <MotionBox
      sx={{
        ...(imageSize(size, fitContainer) as Record<string, unknown>),
        position: 'relative',
      }}
      layout
      animate={animationControls ? animationControls : 'visible'}
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
    </MotionBox>
  );
}

export default ImageCrossfade;
