import { Story, Meta } from '@storybook/react';
import { LoadingScreenTest } from './LoadingScreenContext';

const LoadingScreenContextDemo = () => {
  return (
    <LoadingScreenTest>
      {(loading) => {
        return `${loading}`;
      }}
    </LoadingScreenTest>
  );
};

export default {
  component: LoadingScreenContextDemo,
  title: 'LoadingScreenContext',
} as Meta;

const Template: Story<any> = (args) => <LoadingScreenContextDemo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
