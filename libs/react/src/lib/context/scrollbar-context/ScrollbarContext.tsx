import React from 'react';
import { useSmoothScrollbar } from '../../hooks/use-smooth-scrollbar/UseSmoothScrollbar';

export const ScrollbarContext = React.createContext<
  ReturnType<typeof useSmoothScrollbar> | undefined
>(undefined);

export interface ScrollbarProviderProps {
  children?: React.ReactNode;
  wrapperRef: React.RefObject<HTMLElement>;
}

export const ScrollbarProvider = ({
  children,
  wrapperRef,
}: ScrollbarProviderProps) => {
  const smoothScroll = useSmoothScrollbar(wrapperRef);

  return (
    <ScrollbarContext.Provider value={smoothScroll}>
      {children}
    </ScrollbarContext.Provider>
  );
};

export interface ScrollbarConsumerProps {
  children(context: ReturnType<typeof useSmoothScrollbar>): React.ReactNode;
}

export const ScrollBarConsumer = ({ children }: ScrollbarConsumerProps) => {
  return (
    <ScrollbarContext.Consumer>
      {(context) => {
        if (typeof context === 'undefined') {
          throw new Error('Component is not within Global UI Context Provider');
        }

        return children(context);
      }}
    </ScrollbarContext.Consumer>
  );
};

export const useScrollbarContext = () => {
  const context = React.useContext(ScrollbarContext);

  if (typeof context === 'undefined') {
    throw new Error('Component is not within Global UI Context Provider');
  }

  return context;
};
