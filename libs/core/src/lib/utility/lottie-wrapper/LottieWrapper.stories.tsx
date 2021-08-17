import { Story, Meta } from '@storybook/react';
import LottieAnimation, { ILottieAnimation } from '.';
import successAnimationData from './data.json';

export default {
  title: 'AtlasCode/Lotties/Animations',
  component: LottieAnimation,
  decorators: [
    (Story) => (
      <div
        style={{
          width: '90vw',
          height: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ILottieAnimation> = (args) => (
  <LottieAnimation {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  animationData: successAnimationData,
  height: 300,
  width: 300,
  loop: false,
} as ILottieAnimation;
Primary.storyName = 'Success animation';
