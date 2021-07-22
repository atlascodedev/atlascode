import { ImageList, ImageListItem } from '@material-ui/core';
import { Story, Meta } from '@storybook/react';
import mockImageList from '../../mock/mock-image-list/mockImageList';
import {
  SmoothScrollWrapper,
  SmoothScrollWrapperProps,
} from './SmoothScrollWrapper';

export default {
  component: SmoothScrollWrapper,
  title: 'AtlasCode/Utility/SmoothScrollWrapper',
  parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<SmoothScrollWrapperProps> = (args) => (
  <SmoothScrollWrapper {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <ImageList sx={{ width: '100%' }} cols={3} rowHeight={'auto'}>
      {mockImageList(50).map((image, index) => {
        return (
          <ImageListItem key={index}>
            <img
              srcSet={`${image}?w=164&h=164&fit=crop&auto=format 1x,
                ${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt=""
              loading="lazy"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  ),
};
Primary.storyName = 'Smooth Scroll Wrapper';
