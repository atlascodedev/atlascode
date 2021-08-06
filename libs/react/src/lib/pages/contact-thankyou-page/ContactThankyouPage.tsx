import { Box } from '@material-ui/core';

/* eslint-disable-next-line */
export interface ContactThankyouPageProps {}

export function ContactThankyouPage(props: ContactThankyouPageProps) {
  return (
    <Box
      id="Atlas-ContactThankyouPage-root"
      sx={{ width: '100%', position: 'relative', minHeight: '100vh' }}
    >
      <Box
        id="Atlas-ContactThankyouPage-container"
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      ></Box>
    </Box>
  );
}

export default ContactThankyouPage;
