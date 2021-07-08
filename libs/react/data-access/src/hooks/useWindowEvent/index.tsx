import React from 'react';

function useWindowEvent<T extends keyof WindowEventMap>(
  type: T,
  listener: (this: Window, event: WindowEventMap[T]) => any,
  options?: boolean | AddEventListenerOptions
) {
  const listenerRef = React.useRef(listener);

  listenerRef.current = listener;

  React.useEffect(() => {
    const handler = (event: WindowEventMap[T]) => {
      listenerRef.current.call(window, event);
    };

    window.addEventListener(type, handler, options);

    return () => {
      window.removeEventListener(type, handler, options);
    };
  }, [type, options]);
}

export default useWindowEvent;
