import {
  generateCSSFilter,
  MinimalContactForm,
  MinimalContactFormProps,
  polkaPattern,
} from '@atlascode/core';
import { Box, useTheme, useMediaQuery } from '@material-ui/core';
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

/* eslint-disable-next-line */
export interface MinimalFormPicOverBlobProps {
  formProps?: MinimalContactFormProps;
  blobColor?: 'primary' | 'secondary';
  desktopPicture?: JSX.Element;
  picture?: JSX.Element;
}

export function MinimalFormPicOverBlob({
  formProps,
  blobColor = 'primary',
  desktopPicture,
  picture,
}: MinimalFormPicOverBlobProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [blobFilter, setBlobFilter] = React.useState<string>('none');

  React.useEffect(() => {
    const filterResult = generateCSSFilter(theme.palette[blobColor].main);

    setBlobFilter(filterResult);
  }, [blobColor, theme.palette]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 'auto', lg: '80vh' },
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '40% 60%' },
          gridTemplateRows: { xs: '1fr 1fr', lg: 'none' },
          gridAutoFlow: 'row',
          height: '100%',
        }}
      >
        <Box sx={{ alignSelf: 'center', px: { xs: '3rem', lg: '0rem' } }}>
          <MinimalContactForm {...formProps} />
        </Box>
        <Box
          component="figure"
          sx={{
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            transform: 'translate3D(0px, 0px, 0px)',
            m: '0px',
            p: { xs: '0px', md: '10px 0px 0px 10px' },
          }}
        >
          <Box
            component="img"
            src={'/images/blob2.svg'}
            sx={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              filter: blobFilter,
              zIndex: -1,
              objectFit: { xs: 'cover', lg: 'contain' },
              left: 0,
            }}
          />

          <Box sx={{ width: '100%', height: '100%' }}>
            {isDesktop && desktopPicture ? desktopPicture : picture}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
