import { Box, useTheme } from '@material-ui/core';
import _ from 'lodash';
import { useRouter } from 'next/dist/client/router';
import {
  ContactFormDialog,
  isBrowser,
  KotaMenu,
  ModernCleanMenu,
  useScrollbarContext,
} from '@atlascode/core';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const [contactFormDialogState, setContactFormDialogState] =
    React.useState<boolean>(false);
  const { scrollIntoView, scrollTop } = useScrollbarContext();

  const { asPath, push } = useRouter();

  const handleScrollIntoView = (callback: (...args: unknown[]) => void) => {
    if (asPath !== '/') {
      push('/');
    } else {
      callback();
    }
  };

  const handleLogoClick = () => {
    if (asPath !== '/') {
      push('/');
    } else {
      scrollTop(1500);
    }
  };
  const items = [
    {
      action: () =>
        handleScrollIntoView(() => scrollIntoView('#courses_section')),
      label: 'Cursos',
    },
    {
      action: () => handleScrollIntoView(() => scrollIntoView('#contact_form')),
      label: 'Contato',
    },
  ];
  const [menuState, setMenuState] = React.useState<boolean>(false);
  const theme = useTheme();
  const mobileHeaderRef = React.useRef<HTMLElement>(null);
  const desktopHeaderRef = React.useRef<HTMLElement>(null);

  const { scrollbarInstance, disableScroll, enableScroll } =
    useScrollbarContext();

  React.useEffect(() => {
    if (isBrowser) {
      scrollbarInstance?.addListener((status) => {
        const offset = status.offset;

        mobileHeaderRef.current.style.top = offset.y + 'px';
        desktopHeaderRef.current.style.top = offset.y + 'px';
      });
    }
  }, [scrollbarInstance]);

  return (
    <React.Fragment>
      <ContactFormDialog
        cancelLabel="Cancelar"
        submitLabel="Enviar"
        title="Contato"
        subtitle="Preencha o formulário com seus dados e uma mensagem e um de nossos representantes irá atendê-lo na primeira oportunidade."
        handleClose={() => setContactFormDialogState(false)}
        open={contactFormDialogState}
      />
      <Box
        ref={mobileHeaderRef}
        sx={{
          display: { xs: 'block', lg: 'none' },
          width: '100%',
          position: 'fixed',
          zIndex: 9999,
        }}
      >
        <KotaMenu
          onOpen={disableScroll}
          onClose={enableScroll}
          {...{
            open: menuState,
            ImageCrossFadeProps: {
              primaryImage: '/images/gnosis-logo-blue.svg',
              secondaryImage: '/images/gnosis-logo-white.svg',
            },
            KotaBurguerProps: {
              colorOpen: '#fff',
              colorClosed: theme.palette.primary.main,
              onClick: () => setMenuState((prevState) => !prevState),
            },
            items: items.map((value, index) => {
              return { action: value.action, label: value.label };
            }),
          }}
        />
      </Box>
      <Box
        ref={desktopHeaderRef}
        sx={{
          display: {
            xs: 'none',
            lg: 'block',
            position: 'fixed',
            width: '100%',
            zIndex: 9999,
          },
        }}
      >
        <ModernCleanMenu
          onLogoClick={handleLogoClick}
          ButtonProps={{
            children: 'Contate-nos',
            variant: 'kota',
            onClick: () => setContactFormDialogState(true),
          }}
          logo={'/images/gnosis-logo-blue.svg'}
          items={items.map((value, index) => {
            return { onClick: value.action, label: value.label };
          })}
        />
      </Box>
    </React.Fragment>
  );
};

export default Header;
