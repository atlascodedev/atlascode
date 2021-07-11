import { Story, Meta } from '@storybook/react';
import { NeonButton, NeonButtonProps } from './NeonButton';

export default {
  component: NeonButton,
  title: 'AtlasCode Buttons/NeonButton',
} as Meta;

const Template: Story<NeonButtonProps> = (args) => <NeonButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Hello world, I'm a button",
} as NeonButtonProps;
Primary.parameters = {
  controls: {
    include: ['color', 'children', 'rounded', 'elevated'] as Array<
      keyof NeonButtonProps
    >,
  },
};
