import { Box } from '@material-ui/core';
import { Property } from 'csstype';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { ResponsiveStyleValue } from '../../typings/styling';
import MotionBox from '../../utility/motion-box/MotionBox';

/* eslint-disable-next-line */
export interface ImageCrossfadeProps {
  primaryImage: string;
  secondaryImage: string;
  swap?: boolean;
  fontSize?: ResponsiveStyleValue<Property.FontSize<string>>;
}

export function ImageCrossfade({
  primaryImage,
  secondaryImage,
  swap,
  fontSize = '1rem',
}: ImageCrossfadeProps) {
  return (
    <Box
      sx={{
        fontSize: fontSize,
        width: '20em',
        height: '20em',
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
