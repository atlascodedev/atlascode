import { Story, Meta } from '@storybook/react';
import { useSmoothScrollbar } from './use-smooth-scrollbar';
import React from 'react';

const Demo = () => {
  const demoRef = React.useRef<HTMLElement>(null);

  const { disableScroll, enableScroll, scrollbarInstance } =
    useSmoothScrollbar(demoRef);

  return (
    <main
      style={{
        overflow: 'hidden',
        outline: 'none',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      ref={demoRef}
    >
      <div style={{ height: '3000px', backgroundColor: 'violet' }}></div>
    </main>
  );
};

export default {
  title: 'Atlas Code Hooks/UseSmoothScrollbar',
} as Meta;

const Template: Story<never> = (args) => <Demo {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'useSmoothScroll demo';
