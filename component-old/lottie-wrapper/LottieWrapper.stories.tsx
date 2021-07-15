import { Story, Meta } from '@storybook/react';
import LottieAnimation, { ILottieAnimation } from '.';
import successAnimationData from '../lotties/Success/data.json';
import errorAnimationData from '../lotties/Error/data.json';
import favoriteAnimationData from '../lotties/Favorite/data.json';
import fluidLoadAnimationData from '../lotties/FluidLoad/data.json';
import likeAnimationData from '../lotties/Like/data.json';
import mailSentOutlinedAnimationData from '../lotties/MailSentOutlined/data.json';
import reactAnimationData from '../lotties/React/data.json';
import successAltAnimationData from '../lotties/SuccessAlt/data.json';
import taskCompleteAnimationData from '../lotties/TaskComplete/data.json';
import confettiAnimationData from '../lotties/Confetti/data.json';
import emailLoopedAnimationData from '../lotties/EmailLooped/data.json';

export default {
  title: 'AtlasCode Lotties/Animations',
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

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  animationData: errorAnimationData,
} as ILottieAnimation;
Secondary.storyName = 'Error animation';

export const Favorite = Template.bind({});
Favorite.args = {
  ...Primary.args,
  animationData: favoriteAnimationData,
} as ILottieAnimation;
Favorite.storyName = 'Favorite animation';

export const FluidLoad = Template.bind({});
FluidLoad.args = {
  ...Primary.args,
  animationData: fluidLoadAnimationData,
} as ILottieAnimation;
FluidLoad.storyName = 'Fluid load animation';

export const Like = Template.bind({});
Like.args = {
  ...Primary.args,
  animationData: likeAnimationData,
} as ILottieAnimation;
Like.storyName = 'Like animation';

export const MailSentOutlined = Template.bind({});
MailSentOutlined.args = {
  ...Primary.args,
  animationData: mailSentOutlinedAnimationData,
} as ILottieAnimation;
MailSentOutlined.storyName = 'Mail sent outlined animation';

export const ReactAnimation = Template.bind({});
ReactAnimation.args = {
  ...Primary.args,
  animationData: reactAnimationData,
} as ILottieAnimation;
ReactAnimation.storyName = 'React logo animation';

export const SuccessAlt = Template.bind({});
SuccessAlt.args = {
  ...Primary.args,
  animationData: successAltAnimationData,
} as ILottieAnimation;
SuccessAlt.storyName = 'Succes alt animation';

export const Confetti = Template.bind({});
Confetti.args = {
  ...Primary.args,
  animationData: confettiAnimationData,
} as ILottieAnimation;
Confetti.storyName = 'Confetti animation';

export const TaskComplete = Template.bind({});
TaskComplete.args = {
  ...Primary.args,
  animationData: taskCompleteAnimationData,
};
TaskComplete.storyName = 'Task complete animation';

export const EmailLooped = Template.bind({});
EmailLooped.args = {
  ...Primary.args,
  animationData: emailLoopedAnimationData,
} as ILottieAnimation;
EmailLooped.storyName = 'Email looped animation';
