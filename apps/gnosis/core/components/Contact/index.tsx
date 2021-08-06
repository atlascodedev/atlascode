import {
  MinimalFormPicOverBlob,
  MinimalFormPicOverBlobProps,
  polkaPattern,
} from '@atlascode/react-core';
import { Box } from '@material-ui/core';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContactProps extends MinimalFormPicOverBlobProps {}

const Contact = (props: ContactProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
        px: { xs: '1rem', lg: '4rem' },
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          ...(polkaPattern('#fff', 0.1, 40, '#6d6d6d') as Record<
            string,
            unknown
          >),
        }}
      />

      <MinimalFormPicOverBlob picture={<PicComponent />} {...props} />
    </Box>
  );
};

export default Contact;

const PicComponent = () => {
  return (
    <Box
      sx={{
        pt: '125px',
        width: '100%',
        height: '100%',
        objectFit: { xs: 'cover', lg: 'contain' },
        bottom: 0,
        position: 'absolute',
      }}
      component="img"
      src="/images/young-doc-female-2.png"
    ></Box>
  );
};
