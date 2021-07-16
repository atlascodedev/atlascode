import React from 'react';

export const ScrollbarContext = React.createContext(undefined);

export interface ScrollbarProviderProps {
  children?: React.ReactNode;
}

export const ScrollbarProvider = ({ children }: ScrollbarProviderProps) => {
  const [scrollbar, setScrollbar] = React.useState(null);
  const scrollRef = React.useRef();
};
