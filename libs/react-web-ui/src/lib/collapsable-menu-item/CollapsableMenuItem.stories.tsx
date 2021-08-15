import { Story, Meta } from '@storybook/react';
import {
  CollapsableMenuItem,
  CollapsableMenuItemProps,
} from './CollapsableMenuItem';

export default {
  component: CollapsableMenuItem,
  title: 'Unstable/CollapsableMenuItem',
} as Meta;

const Template: Story<CollapsableMenuItemProps> = (args) => (
  <CollapsableMenuItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label testing lorem ipsum dolum salet i cant t ake much more',
  subMenu: [{ label: 'Ok' }, { label: 'what now' }],
};
