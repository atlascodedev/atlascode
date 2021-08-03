import { Story, Meta } from '@storybook/react';
import { KotaMenu, KotaMenuProps } from './KotaMenu';

export default {
  component: KotaMenu,
  title: 'Unstable/KotaMenu',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            width: '100%',
            height: '150vh',
            overflowX: 'hidden',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
} as Meta;

const Template: Story<KotaMenuProps> = (args) => <KotaMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  MenuBarProps: {
    logo: './images/gnosis-logo-blue.svg',
    logoOpen: './images/gnosis-logo-white.svg',
    BurguerProps: {
      colorOpen: '#fff',
      fontSize: { xs: '0.4rem', lg: '0.5rem' },
    },
  },
  open: true,
};
