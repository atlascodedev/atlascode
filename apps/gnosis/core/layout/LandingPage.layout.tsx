import {
  StandardFooter,
  KotaMenu,
  ModernCleanMenu,
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
  return (
    <Box sx={{ width: '100%' }}>
      <Header />
      {children}
      <StandardFooter
        emails={['teste@teste.com']}
        phones={['(51) 9-9999-8877']}
      />
    </Box>
  );
};

export default AppLayout;
