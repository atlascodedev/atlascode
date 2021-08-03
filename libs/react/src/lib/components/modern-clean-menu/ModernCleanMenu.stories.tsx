import { Box } from '@material-ui/core';
import { Story, Meta } from '@storybook/react';
import { ModernCleanMenu, ModernCleanMenuProps } from './ModernCleanMenu';

export default {
  component: ModernCleanMenu,
  title: 'ModernCleanMenu',
  decorators: [
    (Story) => {
      return (
        <Box sx={{ width: '100%', height: '150vh' }}>
          <Story />
        </Box>
      );
    },
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<ModernCleanMenuProps> = (args) => (
  <ModernCleanMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  logo: './images/gnosis-logo-blue.svg',
  items: [
    {
      label: 'Item 1',
      subMenu: [{ label: 'Sub-Item 1' }, { label: 'Sub-Item 2' }],
    },
    {
      label: 'Cursos de pós-graduação',
      subMenu: [{ label: 'Sub-Item 1' }, { label: 'Sub-Item 2' }],
    },
    {
      label: 'Item 1',
      subMenu: [{ label: 'Sub-Item 1' }, { label: 'Sub-Item 2' }],
    },
  ],
};
