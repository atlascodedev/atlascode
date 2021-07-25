import { HeroScreenWhiteDots } from '@atlascode/react-core';
import { Box } from '@material-ui/core';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeroScreenProps {}

const HeroScreen = (props: HeroScreenProps) => {
  return (
    <HeroScreenWhiteDots
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
        pt: { xs: '100px' },
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
