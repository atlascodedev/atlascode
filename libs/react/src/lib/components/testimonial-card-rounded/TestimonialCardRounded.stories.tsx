import { Story, Meta } from '@storybook/react';
import {
  TestimonialCardRounded,
  TestimonialCardRoundedProps,
} from './TestimonialCardRounded';

export default {
  component: TestimonialCardRounded,
  title: 'TestimonialCardRounded',
} as Meta;

const Template: Story<TestimonialCardRoundedProps> = (args) => (
  <TestimonialCardRounded {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'Rafael Gonçalves',
  identification: 'Gerente de vendas/AtlasCode',
};
