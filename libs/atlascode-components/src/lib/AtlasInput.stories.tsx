import { Story, Meta } from '@storybook/react';
import { AtlasInput, AtlasInputProps } from './AtlasInput';

export default {
  component: AtlasInput,
  title: 'AtlasInput',
} as Meta;

const Template: Story<AtlasInputProps> = (args) => <AtlasInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
