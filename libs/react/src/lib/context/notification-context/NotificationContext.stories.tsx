import { Button } from '@material-ui/core';
import { Story, Meta } from '@storybook/react';
import {
  NotificationContext,
  NotificationDialogProvider,
  useNotificationDialog,
} from './NotificationContext';
import { NOTIFICATION_VISIBILITY } from './typings';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DemoProps {}

const Demo = (props: DemoProps) => {
  const { dispatch, state } = useNotificationDialog();

  console.log(state);

  return (
    <div>
      <Button
        onClick={() =>
          dispatch({
            type: NOTIFICATION_VISIBILITY.VISIBLE,
            payload: {
              message: 'Hello world',
              severity: 'error',
              title: 'Hello hello',
            },
          })
        }
        variant="kota"
        color="primary"
      >
        Open dialog from global state
      </Button>
    </div>
  );
};

export default {
  component: Demo,
  title: 'AtlasCode/React Context/NotificationContext',
  decorators: [
    (Story) => {
      return (
        <NotificationDialogProvider>
          <Story />
        </NotificationDialogProvider>
      );
    },
  ],
} as Meta;

const Template: Story<DemoProps> = (args) => <Demo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
