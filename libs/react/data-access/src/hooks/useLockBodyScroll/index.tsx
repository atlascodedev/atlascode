import React from 'react';
import {
  windowAddListener,
  windowRemoveListener,
  isIosDevice,
  noOperation,
} from '@atlascode/helpers';

export function getClosestBody(
  el: Element | HTMLElement | HTMLIFrameElement | null
): HTMLElement | null {
  if (!el) {
    return null;
  } else if (el.tagName === 'BODY') {
    return el as HTMLElement;
  } else if (el.tagName === 'IFRAME') {
    const document = (el as HTMLIFrameElement).contentDocument;
    return document ? document.body : null;
  } else if (!(el as HTMLElement).offsetParent) {
    return null;
  }

  return getClosestBody((el as HTMLElement).offsetParent!);
}

function preventDefault(rawEvent: TouchEvent): boolean {
  const e = rawEvent || window.event;
  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;

  if (e.preventDefault) e.preventDefault();

  return false;
}

export interface BodyInfoItem {
  counter: number;
  initialOverflow: CSSStyleDeclaration['overflow'];
}

const bodies: Map<HTMLElement, BodyInfoItem> = new Map();

const doc: Document | undefined =
  typeof document === 'object' ? document : undefined;

let documentListenerAdded = false;

export default !doc
  ? function useLockBodyMock(
      _locked = true,
      _elementRef?: React.RefObject<HTMLElement>
    ) {
      noOperation();
    }
  : function useLockBody(
      locked = true,
      elementRef?: React.RefObject<HTMLElement>
    ) {
      const bodyRef = React.useRef(doc!.body);
      elementRef = elementRef || bodyRef;

      const lock = (body: HTMLElement) => {
        const bodyInfo = bodies.get(body);
        if (!bodyInfo) {
          bodies.set(body, {
            counter: 1,
            initialOverflow: body.style.overflow,
          });
          if (isIosDevice) {
            if (!documentListenerAdded) {
              windowAddListener(document, 'touchmove', preventDefault, {
                passive: false,
              });

              documentListenerAdded = true;
            }
          } else {
            body.style.overflow = 'hidden';
          }
        } else {
          bodies.set(body, {
            counter: bodyInfo.counter + 1,
            initialOverflow: bodyInfo.initialOverflow,
          });
        }
      };

      const unlock = (body: any) => {
        const bodyInfo = bodies.get(body);
        if (bodyInfo) {
          if (bodyInfo.counter === 1) {
            bodies.delete(body);
            if (isIosDevice) {
              body.ontouchmove = null;

              if (documentListenerAdded) {
                windowRemoveListener(document, 'touchmove', preventDefault);
                documentListenerAdded = false;
              }
            } else {
              body.style.overflow = bodyInfo.initialOverflow;
            }
          } else {
            bodies.set(body, {
              counter: bodyInfo.counter - 1,
              initialOverflow: bodyInfo.initialOverflow,
            });
          }
        }
      };

      React.useEffect(() => {
        const body = getClosestBody(elementRef!.current);
        if (!body) {
          return;
        }
        if (locked) {
          lock(body);
        } else {
          unlock(body);
        }
      }, [locked, elementRef.current]);

      // clean up, on un-mount
      React.useEffect(() => {
        const body = getClosestBody(elementRef!.current);
        if (!body) {
          return;
        }
        return () => {
          unlock(body);
        };
      }, []);
    };
