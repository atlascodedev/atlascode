import { Story, Meta } from '@storybook/react';
import { KotaMenu, KotaMenuProps } from './KotaMenu';

export default {
  component: KotaMenu,
  title: 'KotaMenu',
} as Meta;

const Template: Story<KotaMenuProps> = (args) => <KotaMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
