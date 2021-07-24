import { Story, Meta } from '@storybook/react';
import { StandardFooter, StandardFooterProps } from './StandardFooter';

export default {
  component: StandardFooter,
  title: 'StandardFooter',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<StandardFooterProps> = (args) => (
  <StandardFooter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  phones: ['(51) 9-98477-3704', '(14) 9-9988-9988', '(14) 9-8877-6655'],
  emails: ['teste@teste.com', 'teste2@teste.com'],
};
