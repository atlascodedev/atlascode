import { Story, Meta } from '@storybook/react';
import GnosisLoader, { GnosisLoaderProps } from './GnosisLoader';

const GnosisLoaderDemo = () => {
  return (
    <GnosisLoader
      onAnimationEnd={() => alert('animation has ended')}
    ></GnosisLoader>
  );
};

export default {
  component: GnosisLoaderDemo,
  title: 'GnosisLoader',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<unknown> = (args) => (
  <GnosisLoaderDemo {...(args as unknown as never)} />
);

export const Primary = Template.bind({});
Primary.args = {};
