import {
  HeroScreenWhiteDots,
  HeroScreenWhiteDotsProps,
  useScrollbarContext,
} from '@atlascode/react-core';
import { Box } from '@material-ui/core';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeroScreenProps
  extends Omit<HeroScreenWhiteDotsProps, 'desktopPicture' | 'picture'> {}

const HeroScreen = (props: HeroScreenProps) => {
  const {
    disableScroll,
    enableScroll,
    scrollIntoView,
    scrollTop,
    scrollbarInstance,
  } = useScrollbarContext();

  return (
    <HeroScreenWhiteDots
      {...props}
      desktopPicture={<DesktopPicture />}
      picture={<MobilePicture />}
    />
  );
};

export default HeroScreen;

const DesktopPicture = ({ src = 'images/hero-doc.png' }: { src?: string }) => {
  return (
    <Box
      src={src}
      component="img"
      sx={{
        pt: '130px',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );
};

const MobilePicture = ({
  src = 'images/young-doc-female.png',
}: {
  src?: string;
}) => {
  return (
    <Box
      src={src}
      component="img"
      sx={{
        width: '100%',
        height: '100%',
        objectFit: ['cover', 'contain', null, null, null],
        position: 'absolute',
      }}
    />
  );
};
