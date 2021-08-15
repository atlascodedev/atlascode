import React, { RefObject } from "react";
import { windowAddListener, windowRemoveListener } from "@atlascode/helpers";

const defaultEvents = ["mousedown", "touchstart"];

const useClickAway = <E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents
) => {
  const savedCallback = React.useRef(onClickAway);
  React.useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);
  React.useEffect(() => {
    const handler = (event: any) => {
      const { current: el } = ref;
      el && !el.contains(event.target) && savedCallback.current(event);
    };
    for (const eventName of events) {
      windowAddListener(document, eventName, handler);
    }
    return () => {
      for (const eventName of events) {
        windowRemoveListener(document, eventName, handler);
      }
    };
  }, [events, ref]);
};

export default useClickAway;
