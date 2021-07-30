import { Story, Meta } from '@storybook/react';
import { KotaBurguer, KotaBurguerProps } from './KotaBurguer';
import React from 'react';

const KotaBurguerButtonDemo = (props: KotaBurguerProps) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <KotaBurguer
      onClick={() => setOpen((prevState) => !prevState)}
      open={open}
    />
  );
};

export default {
  component: KotaBurguer,
  title: 'AtlasCode/Buttons/Burguer - Kota',
  decorators: [
    (Story) => (
      <div
        style={{
          fontSize: '22px',
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
