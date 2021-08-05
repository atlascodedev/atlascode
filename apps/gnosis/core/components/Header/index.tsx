import { isBrowser } from '@atlascode/helpers';
import {
  KotaMenu,
  ModernCleanMenu,
  useScrollbarContext,
} from '@atlascode/react-core';
import { Box } from '@material-ui/core';
import _ from 'lodash';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const [menuState, setMenuState] = React.useState<boolean>(false);

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
              primaryImage: './images/gnosis-logo-blue.svg',
              secondaryImage: './images/gnosis-logo-white.svg',
            },
            KotaBurguerProps: {
              colorOpen: '#fff',
              onClick: () => setMenuState((prevState) => !prevState),
            },
            items: [
              { action: _.noop, label: 'Item 1' },
              { action: _.noop, label: 'Item 2' },
              { action: _.noop, label: 'Item 3' },
              { action: _.noop, label: 'Item 4' },
            ],
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
          logo={'./images/gnosis-logo-blue.svg'}
          items={[
            { onClick: _.noop, label: 'Item 1' },
            { onClick: _.noop, label: 'Item 2' },
            { onClick: _.noop, label: 'Item 3' },
            { onClick: _.noop, label: 'Item 4' },
          ]}
        />
      </Box>
    </React.Fragment>
  );
};

export default Header;
