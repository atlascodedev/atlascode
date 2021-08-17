import { Story, Meta } from '@storybook/react';
import {
  TestimonialCardRounded,
  TestimonialCardRoundedProps,
} from './TestimonialCardRounded';

export default {
  component: TestimonialCardRounded,
  title: 'AtlasCode/Cards/Testimonial Card',
} as Meta;

const Template: Story<TestimonialCardRoundedProps> = (args) => (
  <TestimonialCardRounded {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'Rafael Gonçalves',
  identification: 'Gerente de vendas/AtlasCode',
  testimonial:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quibusdam quas ullam rerum quisquam debitis accusantium, porro incidunt nulla veritatis temporibus. Rerum hic omnis minus vitae ullam quo quia dolorum.',
};
