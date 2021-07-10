import { Story, Meta } from '@storybook/react';
import { ProductCard, ProductCardProps } from './ProductCard';

export default {
  component: ProductCard,
  title: 'ProductCard',
} as Meta;

const Template: Story<ProductCardProps> = (args) => <ProductCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
