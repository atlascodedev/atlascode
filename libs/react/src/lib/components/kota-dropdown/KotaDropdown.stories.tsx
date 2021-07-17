import { Story, Meta } from '@storybook/react';
import { KotaDropdown, KotaDropdownProps } from './KotaDropdown';

export default {
  component: KotaDropdown,
  title: 'AtlasCode/Menu/Kota/KotaDropdown',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<KotaDropdownProps> = (args) => <KotaDropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
