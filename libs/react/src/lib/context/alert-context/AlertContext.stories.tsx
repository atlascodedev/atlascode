import { Box, Button, MenuItem, TextField } from '@material-ui/core';
import { Story, Meta } from '@storybook/react';
import {
  AlertContextProvider,
  AlertSeverity,
  useAlertContext,
} from './AlertContext';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DemoProps {}

const demoSeverityOptions: Array<AlertSeverity> = [
  'error',
  'info',
  'success',
  'warning',
];

const Demo = (props: DemoProps) => {
  const { message, open, setAlert, severity } = useAlertContext();

  const [severityOptions, setSeverityOptions] =
    React.useState<AlertSeverity>('success');

  const [alertMessageValue, setAlertMessageValue] = React.useState<string>('');

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          margin: '15rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr',
            gridAutoFlow: 'row',
            width: '100%',
            gap: '2rem',
          }}
        >
          <TextField
            value={alertMessageValue}
            onChange={(event) => setAlertMessageValue(event.target.value)}
            label="Alert message"
          />
          <TextField
            value={severityOptions}
            onChange={(event) =>
              setSeverityOptions(event.target.value as AlertSeverity)
            }
            select
            label="Alert severity"
          >
            {demoSeverityOptions.map((severityValue, index) => {
              return (
                <MenuItem key={index} value={severityValue}>
                  {severityValue}
                </MenuItem>
              );
            })}
          </TextField>
        </Box>

        <Button
          onClick={() => setAlert(severityOptions, alertMessageValue)}
          variant="contained"
          color="primary"
        >
          Trigger alert
        </Button>
      </Box>
    </Box>
  );
};

export default {
  component: Demo,
  title: 'AtlasCode/React Context/AlertContext',
  decorators: [
    (Story) => {
      return (
        <AlertContextProvider>
          <Story />
        </AlertContextProvider>
      );
    },
  ],
} as Meta;

const Template: Story<DemoProps> = (args) => <Demo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
