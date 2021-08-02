import { Story, Meta } from '@storybook/react';
import { ImageCrossfade, ImageCrossfadeProps } from './ImageCrossfade';

export default {
  component: ImageCrossfade,
  title: 'ImageCrossfade',
} as Meta;

const Template: Story<ImageCrossfadeProps> = (args) => (
  <ImageCrossfade {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  primaryImage: './images/doc-img-2.png',
  secondaryImage: './images/young-doc-female.png',
};
