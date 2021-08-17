// import React, { RefObject } from 'react';

// import useRequestAnimationFrameState from '../useRequestAnimationFrameState';

// export interface State {
//   docX: number;
//   docY: number;
//   posX: number;
//   posY: number;
//   elX: number;
//   elY: number;
//   elH: number;
//   elW: number;
// }

// const useMousePosition = (ref: RefObject<Element>): State => {
//   if (process.env.NODE_ENV === 'development') {
//     if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
//       console.error('useMouse expects a single ref argument.');
//     }
//   }

//   const [state, setState] = useRequestAnimationFrameState<State>({
//     docX: 0,
//     docY: 0,
//     posX: 0,
//     posY: 0,
//     elX: 0,
//     elY: 0,
//     elH: 0,
//     elW: 0,
//   });

//   React.useEffect(() => {
//     const moveHandler = (event: MouseEvent) => {
//       if (ref && ref.current) {
//         const {
//           left,
//           top,
//           width: elW,
//           height: elH,
//         } = ref.current.getBoundingClientRect();
//         const posX = left + window.pageXOffset;
//         const posY = top + window.pageYOffset;
//         const elX = event.pageX - posX;
//         const elY = event.pageY - posY;

//         setState({
//           docX: event.pageX,
//           docY: event.pageY,
//           posX,
//           posY,
//           elX,
//           elY,
//           elH,
//           elW,
//         });
//       }
//     };

//     windowAddListener(document, 'mousemove', moveHandler);

//     return () => {
//       windowRemoveListener(document, 'mousemove', moveHandler);
//     };
//   }, [ref]);

//   return state;
// };

// export default useMousePosition;
