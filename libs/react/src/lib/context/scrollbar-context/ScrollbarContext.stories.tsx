import { Meta, Story } from '@storybook/react';
import { ScrollbarProvider, useScrollbarContext } from './ScrollbarContext';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DemoProps {}

const Demo = (props: DemoProps) => {
  const scrollbarContextState = useScrollbarContext();

  React.useEffect(() => {
    console.log(scrollbarContextState);
  }, [scrollbarContextState]);

  return <div style={{ height: '3000px' }}>hell hello</div>;
};

export default {
  title: 'AtlasCode Context Provider/Smooth Scroll Context',
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
