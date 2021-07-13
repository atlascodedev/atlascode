import { Story, Meta } from '@storybook/react';
import { KotaBurguer, KotaBurguerProps } from './KotaBurguer';

export default {
  component: KotaBurguer,
  title: 'KotaBurguer',
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '25px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<KotaBurguerProps> = (args) => <KotaBurguer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
