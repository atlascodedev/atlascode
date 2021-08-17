import React from 'react';
import { Box, Button, ButtonProps, Container } from '@material-ui/core';
import LottieAnimation from '../../utility/lottie-wrapper';
import emailLottie from './data.json';
import _ from 'lodash';

/* eslint-disable-next-line */
export interface ContactThankyouPageProps {
  redirectTimeout?: number;
  redirectCallback?: (...args: unknown[]) => void;
  mainText?: string;
  subText?: string;
  ButtonProps?: ButtonProps;
}

export function ContactThankyouPage({
  mainText = 'Recebemos sua mensagem. Em breve um de nossos representantes retornará o contato. Obrigado pelo contato!',
  subText = 'Você será direcionado à página principal em alguns segundos.',
  redirectCallback = _.noop,
  redirectTimeout = 5000,
  ButtonProps,
}: ContactThankyouPageProps) {
  React.useEffect(() => {
    setTimeout(() => {
      redirectCallback();
    }, redirectTimeout);
  }, [redirectCallback, redirectTimeout]);

  return (
    <Box
      id="Atlas-ContactThankyouPage-root"
      sx={{ width: '100%', position: 'relative' }}
    >
      <Container
        maxWidth="md"
        id="Atlas-ContactThankyouPage-container"
        sx={{
          width: '100%',
          display: 'grid',
          height: '100%',
          gridTemplateColumns: '1fr ',
          gridTemplateRows: '1fr 1fr',
          justifyItems: 'center',
          gridAutoFlow: 'row',
          gap: '30px',
        }}
      >
        <Box sx={{ alignSelf: 'center', justifySelf: 'center' }}>
          <LottieAnimation
            animationData={emailLottie}
            loop={true}
            height={{ xs: 250, sm: 300, lg: 400 }}
            width={{ xs: 250, sm: 300, lg: 400 }}
          />
        </Box>

        <Box
          sx={{
            alignSelf: 'flex-start',
            justifySelf: 'center',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            gap: '35px',
            flexDirection: 'column',
          }}
        >
          <Box
            component="h1"
            sx={{
              m: 0,
              p: 0,
              fontSize: { xs: '3vh', lg: '3.5vh' },
              color: (theme) => theme.palette.primary.main,
              fontWeight: 700,
            }}
          >
            {mainText}
          </Box>

          <Box
            component="h3"
            sx={{
              m: 0,
              p: 0,
              fontSize: { xs: '2vh', lg: '3vh' },
              color: (theme) => theme.palette.grey[500],
              fontWeight: 500,
            }}
          >
            {subText}
          </Box>

          <Button
            sx={{ width: 'fit-content' }}
            color="primary"
            size="large"
            variant="outlined"
            {...ButtonProps}
          >
            Voltar agora
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactThankyouPage;
