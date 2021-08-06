import { isBrowser } from '@atlascode/helpers';
import {
  KotaMenu,
  ModernCleanMenu,
  ModernCleanMenuProps,
  useScrollbarContext,
} from '@atlascode/react-core';
import { Box, useTheme } from '@material-ui/core';
import _ from 'lodash';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps {
  items: Array<{ label: string; action: (...args: unknown[]) => void }>;
  cta?: Pick<ModernCleanMenuProps['CTAButton'], 'label' | 'onClick'>;
  logoClick?: ModernCleanMenuProps['onLogoClick'];
}

const Header = ({ items, cta, logoClick }: HeaderProps) => {
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
          onLogoClick={logoClick}
          CTAButton={cta}
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
