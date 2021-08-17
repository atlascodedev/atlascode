// import React from "react";

// const useIsScrolling = (ref: React.RefObject<HTMLElement>): boolean => {
//   const [scrolling, setScrolling] = React.useState<boolean>(false);

//   React.useEffect(() => {
//     if (ref.current) {
//       let scrollingTimeout: any;

//       const handleScrollEnd = () => {
//         setScrolling(false);
//       };

//       const handleScroll = () => {
//         setScrolling(true);
//         clearTimeout(scrollingTimeout);
//         scrollingTimeout = setTimeout(() => handleScrollEnd(), 150);
//       };

//       windowAddListener(ref.current, "scroll", handleScroll, false);
//       return () => {
//         if (ref.current) {
//           windowRemoveListener(ref.current, "scroll", handleScroll, false);
//         }
//       };
//     }
//     return () => {};
//   }, [ref]);

//   return scrolling;
// };

// export default useIsScrolling;
