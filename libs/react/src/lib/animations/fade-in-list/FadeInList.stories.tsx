import { Box } from '@material-ui/core';
import { Story, Meta } from '@storybook/react';
import OfferCard from '../../components/offer-card/OfferCard';
import FadeInList, { FadeInListProps } from './FadeInList';

type DemoListElementProps = {
  label: string;
};

const DemoListElement = ({ label }: DemoListElementProps) => {
  return <div>{label}</div>;
};

export default {
  component: FadeInList,
  title: 'FadeInListVertical',
} as Meta;

// eslint-disable-next-line @typescript-eslint/ban-types
const Template: Story<FadeInListProps<DemoListElementProps>> = (args) => (
  <FadeInList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  component: DemoListElement,
  list: [
    { label: 'Ok' },
    { label: 'Ok' },
    { label: 'Ok' },
    { label: 'Ok' },
    { label: 'Ok' },
    { label: 'Ok' },
    { label: 'Ok' },
    { label: 'Ok' },
    { label: 'Ok' },
    { label: 'Ok' },
    { label: 'Ok' },
    { label: 'Ok' },
  ],
};
