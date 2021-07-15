import { Story, Meta } from '@storybook/react';
import {
  SmoothScrollWrapper,
  SmoothScrollWrapperProps,
} from './SmoothScrollWrapper';

export default {
  component: SmoothScrollWrapper,
  title: 'SmoothScrollWrapper',
  parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<SmoothScrollWrapperProps> = (args) => (
  <SmoothScrollWrapper {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <div
      style={{ height: '1500px', width: '100%', backgroundColor: 'red' }}
    ></div>
  ),
};
