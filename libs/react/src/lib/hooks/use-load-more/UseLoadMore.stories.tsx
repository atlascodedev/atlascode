import { Story, Meta } from '@storybook/react';
import useLoadMore from './UseLoadMore';

const UseLoadMoreDemo = () => {
  const { loadMore, visible } = useLoadMore([1, 2, 3, 4, 5, 6, 7], 3);

  console.log(visible);

  return <div onClick={() => loadMore()}>hello world</div>;
};

export default {
  component: UseLoadMoreDemo,
  title: 'AtlasCode/Hooks/UseLoadMore',
} as Meta;

const Template: Story<unknown> = (args) => (
  <UseLoadMoreDemo {...(args as unknown as never)} />
);

export const Primary = Template.bind({});
Primary.args = {};
