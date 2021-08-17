import { Meta, Story } from '@storybook/react';
import { ScrollbarProvider, useScrollbarContext } from './SmoothScrollbarContext';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DemoProps {}

const Demo = (props: DemoProps) => {
  const scrollbarContextState = useScrollbarContext();

  return (
    <div style={{ height: '3000px', position: 'fixed' }}>
      <button id="hello" onClick={() => scrollbarContextState.disableScroll()}>
        Disable scroll
      </button>
      <button onClick={() => scrollbarContextState.enableScroll()}>
        Enable scroll
      </button>

      <div
        onClick={() => scrollbarContextState.scrollIntoView('#hello')}
        style={{ bottom: 0, position: 'absolute' }}
      >
        You've reached the bottom
      </div>

      <div
        onClick={() => scrollbarContextState.scrollTop()}
        style={{ bottom: 0, position: 'absolute', right: 0 }}
      >
        Scroll to top
      </div>
    </div>
  );
};

export default {
  title: 'AtlasCode/React Context/Smooth Scroll Context',
  component: Demo,
  decorators: [
    (Story) => {
      const decoratorRef = React.useRef(null);

      return (
        <ScrollbarProvider wrapperRef={decoratorRef}>
          <div style={{ height: '500px', width: '100%' }} ref={decoratorRef}>
            <Story />
          </div>
        </ScrollbarProvider>
      );
    },
  ],
} as Meta;

const Template: Story<DemoProps> = (args) => <Demo {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Smooth Scroll Context Provider';
