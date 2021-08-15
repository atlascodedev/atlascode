import { Story, Meta } from '@storybook/react';
import { MotionBox, MotionBoxProps } from './MotionBox';
import React from 'react';
import { Box } from '@material-ui/system';
import { AtlasButton } from '@atlascode/react-web-ui';

const Demo = () => {
  const [visible, setVisible] = React.useState<boolean>(false);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '3rem',
      }}
    >
      <AtlasButton
        variant="kota-inverted"
        onClick={() => setVisible((prevState) => !prevState)}
      >
        Click me to animate
      </AtlasButton>

      <MotionBox
        animate={visible ? 'visible' : 'hidden'}
        sx={{
          width: '250px',
          height: '250px',
          borderRadius: '8px',
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
        transitionPreset="default"
        variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      />
    </Box>
  );
};

export default {
  component: MotionBox,
  title: 'MotionBox',
} as Meta;

const Template: Story<MotionBoxProps> = (args) => <MotionBox {...args} />;

const TemplateDemo: Story<typeof Demo> = (args) => <Demo {...args} />;

export const Primary = Template.bind({});
export const PrimaryDemo = TemplateDemo.bind({});

Primary.args = {};
PrimaryDemo.args = {};