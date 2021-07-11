import styled from '@emotion/styled';
import { Box, Button } from '@material-ui/core';
import React from 'react';
import MotionBox from '../../utility/motion-box/MotionBox';

/* eslint-disable-next-line */
export interface KotaMenuProps {}

export function KotaMenu(props: KotaMenuProps) {
  return (
    <React.Fragment>
      <Box component={'button'}>Open me</Box>

      <MotionBox
        component={Button}
        sx={{
          width: '100px',
          height: '100px',
          backgroundColor: (theme) => theme.palette.primary.main,
          borderRadius: '4px',
          ':hover': {
            backgroundColor: (theme) => theme.palette.primary.dark,
          },
        }}
      ></MotionBox>
    </React.Fragment>
  );
}

export default KotaMenu;
