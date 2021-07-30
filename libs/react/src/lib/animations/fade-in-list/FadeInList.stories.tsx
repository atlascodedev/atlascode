import { Box } from '@material-ui/core';
import { Story, Meta } from '@storybook/react';
import OfferCard from '../../components/offer-card/OfferCard';
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

export default {
  component: FadeInList,
  title: 'FadeInListVertical',
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
const Template: Story<FadeInListProps<DemoListElementProps>> = (args) => (
  <FadeInList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  component: DemoListElement,
  list: [{}, {}, {}, {}],
  gap: '2rem',
  repeat: true,
};
