import { ContactThankyouPage } from '@atlascode/core';
import { Box } from '@material-ui/core';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContactConfirmationPageProps {}

const ContactConfirmationPage = (props: ContactConfirmationPageProps) => {
  return (
    <Box sx={{ py: { xs: '8rem', lg: '15rem' } }}>
      <ContactThankyouPage />
    </Box>
  );
};

export default ContactConfirmationPage;
