import { Story, Meta } from '@storybook/react';
import {
  CollapsableMenuItem,
  CollapsableMenuItemProps,
} from './CollapsableMenuItem';

export default {
  component: CollapsableMenuItem,
  title: 'CollapsableMenuItem',
} as Meta;

const Template: Story<CollapsableMenuItemProps> = (args) => (
  <CollapsableMenuItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label testing',
  subMenu: [{ label: 'Ok' }, { label: 'what now' }],
};
