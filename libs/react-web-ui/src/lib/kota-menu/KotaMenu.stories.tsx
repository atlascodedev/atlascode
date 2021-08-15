import { Story, Meta } from '@storybook/react';
import _ from 'lodash';
import KotaMenu, { KotaMenuProps } from './KotaMenu';

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
  open: true,
  ImageCrossFadeProps: {
    primaryImage: './images/gnosis-logo-blue.svg',
    secondaryImage: './images/gnosis-logo-white.svg',
  },
  KotaBurguerProps: {
    colorOpen: '#fff',
  },
  items: [
    { action: _.noop, label: 'Item 1' },
    { action: _.noop, label: 'Item 2' },
    { action: _.noop, label: 'Item 3' },
    { action: _.noop, label: 'Item 4' },
  ],
};
