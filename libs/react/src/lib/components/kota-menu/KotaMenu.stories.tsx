import { Story, Meta } from '@storybook/react';
import { KotaMenu, KotaMenuProps } from './KotaMenu';

export default {
  component: KotaMenu,
  title: 'AtlasCode/Menu/Kota/KotaMenu',
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            width: '100vw',
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
  logo: './images/gnosis-logo-blue.svg',
  logoOpen: './images/gnosis-logo-white.svg',
  open: true,
};
