import {
  ContactFormDialog,
  StandardFooter,
  useScrollbarContext,
} from '@atlascode/react-core';
import { Box } from '@material-ui/core';
import _ from 'lodash';
import React from 'react';
import Header from '../components/Header';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppLayoutProps {
  children?: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { scrollIntoView, scrollTop } = useScrollbarContext();
  const [contactFormDialogState, setContactFormDialogState] =
    React.useState<boolean>(false);

  return (
    <Box sx={{ width: '100%' }}>
      <ContactFormDialog
        handleClose={() => setContactFormDialogState(false)}
        open={contactFormDialogState}
      />

      <Header
        logoClick={() => scrollTop(1000)}
        cta={{
          label: 'Contate-nos',
          onClick: () => setContactFormDialogState(true),
        }}
        items={[
          { action: () => scrollIntoView('#courses_section'), label: 'Cursos' },
          { action: () => scrollIntoView('#contact_form'), label: 'Contato' },
        ]}
      />
      {children}
      <StandardFooter
        emails={['teste@teste.com']}
        phones={['(51) 9-9999-8877']}
      />
    </Box>
  );
};

export default AppLayout;
