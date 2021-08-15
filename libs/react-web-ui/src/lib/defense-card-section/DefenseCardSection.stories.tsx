import { Story, Meta } from '@storybook/react';
import {
  DefenseCardSection,
  DefenseCardSectionProps,
} from './DefenseCardSection';
import { BsFillAlarmFill } from 'react-icons/bs';

export default {
  component: DefenseCardSection,
  title: 'AtlasCode/Screens/Defense card section',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<DefenseCardSectionProps> = (args) => (
  <DefenseCardSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  animateIn: true,
  bgColor: '#F6F9FB',
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
