import { Story, Meta } from '@storybook/react';
import React from 'react';
import { ImageList, ImageListItem } from '@material-ui/core';
import { useSmoothScrollbar } from './UseSmoothScrollbar';

const Demo = () => {
  const demoRef = React.useRef<HTMLElement>(null);

  const { disableScroll, enableScroll, scrollbarInstance } =
    useSmoothScrollbar(demoRef);

  return (
    <main
      style={{
        width: '100%',
        height: 'auto',
      }}
      ref={demoRef}
    >
      <ImageList sx={{ width: '100%' }} cols={3} rowHeight={'auto'}>
        {mockImageList(50, 500, 500).map((image, index) => {
          return (
            <ImageListItem key={index}>
              <img src={image} alt="" loading="lazy" />
            </ImageListItem>
          );
        })}
      </ImageList>
    </main>
  );
};

export default {
  title: 'AtlasCode/Hooks/UseSmoothScrollbar',
} as Meta;

const Template: Story<never> = (args) => <Demo {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'useSmoothScroll demo';
