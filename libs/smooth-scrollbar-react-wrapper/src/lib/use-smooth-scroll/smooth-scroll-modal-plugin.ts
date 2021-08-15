import { ScrollbarPlugin } from 'smooth-scrollbar';

class ScrollbarModalPlugin extends ScrollbarPlugin {
  static pluginName = 'modal';

  static defaultOptions = {
    open: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transformDelta(delta: any) {
    return this.options.open ? { x: 0, y: 0 } : delta;
  }
}

export default ScrollbarModalPlugin;
