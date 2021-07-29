import { StandardFooter } from '@atlascode/react-core';
import { Box } from '@material-ui/core';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppLayoutProps {
  children?: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Box sx={{ width: '100%' }}>
      {children}
      <StandardFooter
        emails={['teste@teste.com']}
        phones={['(51) 9-9999-8877']}
      />
    </Box>
  );
};

export default AppLayout;
