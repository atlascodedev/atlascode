import React from 'react';
import { Box, useTheme, useMediaQuery } from '@material-ui/core';
import MinimalContactForm, {
  MinimalContactFormProps,
} from '../../forms/minimal-contact-form/MinimalContactForm';
import blob from './blob_form.svg';
import { generateCSSFilter } from '@atlascode/helpers';

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
            src={blob}
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

export default MinimalFormPicOverBlob;
