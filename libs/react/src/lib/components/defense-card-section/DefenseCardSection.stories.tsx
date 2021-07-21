import { Story, Meta } from '@storybook/react';
import {
  DefenseCardSection,
  DefenseCardSectionProps,
} from './DefenseCardSection';
import { BsFillAlarmFill } from 'react-icons/bs';

export default {
  component: DefenseCardSection,
  title: 'AtlasCode/Screens/Defense card section',
} as Meta;

const Template: Story<DefenseCardSectionProps> = (args) => (
  <DefenseCardSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  itemList: [
    { icon: BsFillAlarmFill, text: 'Lorem ipsum text' },
    { icon: BsFillAlarmFill, text: 'Lorem ipsum text' },
    { icon: BsFillAlarmFill, text: 'Lorem ipsum text' },
    { icon: BsFillAlarmFill, text: 'Lorem ipsum text' },
    { icon: BsFillAlarmFill, text: 'Lorem ipsum text' },
    { icon: BsFillAlarmFill, text: 'Lorem ipsum text' },
    { icon: BsFillAlarmFill, text: 'Lorem ipsum text' },
    { icon: BsFillAlarmFill, text: 'Lorem ipsum text' },
    { icon: BsFillAlarmFill, text: 'Lorem ipsum text' },
  ],
};
