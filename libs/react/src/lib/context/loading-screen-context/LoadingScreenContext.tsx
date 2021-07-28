import React from 'react';
import MotionBox from '../../utility/motion-box/MotionBox';

export const LoadingScreenContext = React.createContext<boolean>(false);

export interface LoadingScreenProviderProps {
  children?: React.ReactNode;
  loading?: boolean;
}

export const LoadingScreenProvider = ({
  children,
  loading = false,
}: LoadingScreenProviderProps) => {
  return (
    <LoadingScreenContext.Provider value={loading}>
      {children}
    </LoadingScreenContext.Provider>
  );
};

export interface LoadingScreenConsumerProps {
  children(context: boolean): React.ReactNode;
}

export const LoadingScreenConsumer = ({
  children,
}: LoadingScreenConsumerProps) => {
  return (
    <LoadingScreenContext.Consumer>
      {(context) => {
        if (typeof context === 'undefined') {
          throw new Error(
            'Component is not within Loading Screen context provider, dont forget to wrap your app with available provider'
          );
        }

        return children(context);
      }}
    </LoadingScreenContext.Consumer>
  );
};

export const useLoadingScreenContext = () => {
  const context = React.useContext(LoadingScreenContext);

  if (typeof context === 'undefined') {
    throw new Error(
      'Component is not within Loading screen context provider, dont forget to wrap your app with available provider'
    );
  }

  return context;
};

export const LoadingScreenTest = ({
  children,
}: {
  children(loading: boolean): React.ReactNode;
}) => {
  const [loading, setLoading] = React.useState(true);

  return (
    <MotionBox
      initial="hidden"
      animate="visible"
      onAnimationComplete={() => setLoading(false)}
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      transition={{
        duration: 5,
      }}
    >
      {children(loading)}
    </MotionBox>
  );
};
