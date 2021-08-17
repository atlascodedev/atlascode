import React from 'react';
import { Box, BoxProps, Button, ButtonProps } from '@material-ui/core';
import { Property } from 'csstype';
import {
  MdWarning,
  MdInfo,
  MdCheckCircle,
  MdErrorOutline,
} from 'react-icons/md';
import { ResponsiveStyleValue } from '@material-ui/system';
import { webkitVerticalTruncate } from '../../jss-mixins/webkit-vertical-truncate/WebkitVerticalTruncate';

type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface NotificationCardProps {
  fontSize?: ResponsiveStyleValue<Property.FontSize<string>>;
  rounded?: boolean;
  type?: NotificationType;
  title?: string;
  message?: string;
  ButtonProps?: ButtonProps;
}

/**
 * @param fontSize Accepts either a string value matching an accepted value for CSS font property or a media query object "{xs: value, sm: value, md: value, lg: value}" to provide responsive values
 * @param rounded Either the card should have rounded borders or not
 * @param type Changes both header color and it's icon to match the corresponding icon, header color is defined through the Material UI notification color palette.
 * @param title Notification title to be displayed
 * @param message Notification message to be displayed
 * @param ButtonProps Material UI Button props, use it to pass onClick events to button or to further customize it
 */
export function NotificationCard({
  fontSize = { xs: '0.75rem', sm: '1rem' },
  rounded = true,
  ButtonProps,
  type = 'success',
  title = 'Placeholder title',
  message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis et veniam debitis quidem libero dicta repellat. Enim, ullam? Ipsa recusandae sequi consectetur molestiae hic quos dolor aspernatur nobis molestias quo. Est similique ut quo odit ex quas modi sequi ipsa?',
}: NotificationCardProps) {
  return (
    <Box
      sx={{
        height: '60em',
        fontSize: fontSize,
        width: '42em',
        boxShadow: (theme) => theme.shadows[10],
        borderRadius: rounded ? '8px 8px 8px 8px' : '0px',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridTemplateRows: '40% 1fr',
          height: '100%',
          width: '100%',
          borderRadius: 'inherit',
        }}
      >
        <Box
          sx={{
            bgcolor: (theme) => theme.palette[type].main,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: rounded ? '8px 8px 0px 0px' : '0px',

            fontSize: '15em',
          }}
        >
          <NotificationIcon type={type} />
        </Box>

        <Box
          sx={{
            bgcolor: (theme) => theme.palette.background.paper,
            borderRadius: 'inherit',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: '20% 1fr auto',
            justifyItems: 'center',
            alignContent: 'center',
            px: '3.5em',
            py: '2.5em',
            rowGap: '1.5em',
          }}
        >
          <Box
            component="h1"
            sx={{
              m: 0,
              p: 0,
              alignSelf: 'center',
              fontSize: '2.5em',
              ...(webkitVerticalTruncate(2) as Record<string, unknown>),
            }}
          >
            {title}
          </Box>

          <Box
            component="h2"
            sx={{
              m: 0,
              p: 0,
              fontSize: '1.5em',
              textAlign: 'center',
              alignSelf: 'center',
              fontWeight: 500,
              ...(webkitVerticalTruncate(7) as Record<string, unknown>),
            }}
          >
            {message}
          </Box>

          <Button
            sx={{ fontSize: '1.5em' }}
            variant="outlined"
            size="large"
            color="primary"
            {...ButtonProps}
          >
            Prosseguir
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default NotificationCard;

interface NotificationIconProps {
  type: NotificationType;
  fontSize?: ResponsiveStyleValue<Property.FontSize<string>>;
}

const notificationIconStyles = (
  type: NotificationType,
  fontSize: ResponsiveStyleValue<Property.FontSize<string>> = '1rem'
): BoxProps['sx'] => {
  return {
    color: (theme) => theme.palette.background.paper,
    fontSize: fontSize,
  };
};

const NotificationIcon = ({
  type,
  fontSize = 'inherit',
}: NotificationIconProps) => {
  switch (type) {
    case 'success':
      return (
        <Box
          sx={{
            ...(notificationIconStyles(type, fontSize) as Record<
              string,
              unknown
            >),
          }}
          component={MdCheckCircle}
        />
      );

    case 'error':
      return (
        <Box
          sx={{
            ...(notificationIconStyles(type, fontSize) as Record<
              string,
              unknown
            >),
          }}
          component={MdErrorOutline}
        />
      );

    case 'info':
      return (
        <Box
          sx={{
            ...(notificationIconStyles(type, fontSize) as Record<
              string,
              unknown
            >),
          }}
          component={MdInfo}
        />
      );

    case 'warning':
      return (
        <Box
          sx={{
            ...(notificationIconStyles(type, fontSize) as Record<
              string,
              unknown
            >),
          }}
          component={MdWarning}
        />
      );
  }
};
