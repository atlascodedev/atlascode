import { Box } from '@material-ui/core';
import { Story, Meta } from '@storybook/react';

import FadeInList, { FadeInListProps } from './FadeInList';

type DemoListElementProps = {
  label?: string;
};

const DemoListElement = ({ label }: DemoListElementProps) => {
  return (
    <Box
      sx={{
        width: '150px',
        height: '150px',
        borderRadius: '8px',
        backgroundColor: 'violet',
      }}
    ></Box>
  );
};

type SecondaryDemoProps = {
  text: string;
};

const SecondaryDemoElement = ({ text }: SecondaryDemoProps) => {
  return (
    <Box
      sx={{
        fontSize: '5rem',
        color: (theme) => theme.palette.primary.main,
        fontWeight: 800,
      }}
    >
      {text}
    </Box>
  );
};

export default {
  component: FadeInList,
  title: 'AtlasCode/Animations/FadeInListVertical',
  argTypes: {
    animateIn: {
      name: 'animateIn',
      type: { name: 'boolean', required: false },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Story />
        </Box>
      );
    },
  ],
} as Meta;

// eslint-disable-next-line @typescript-eslint/ban-types
const Template: Story<FadeInListProps<any>> = (args) => (
  <FadeInList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  component: DemoListElement,
  list: [1, 2, 3, 4, 5],
  gap: '5rem',
  transition: 'submerge',
};
Primary.parameters = {
  controls: {
    exclude: [
      'list',
      'component',
      'onAnimationEnd',
      'onAnimationStart',
      'triggerOnce',
    ],
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  component: SecondaryDemoElement,
  gap: '2rem',
  list: [
    { text: 'Hello' },
    { text: 'world' },
    { text: 'how' },
    { text: 'are you' },
    { text: 'doing' },
    { text: '?' },
  ],
};
Secondary.parameters = { ...Primary.parameters };
