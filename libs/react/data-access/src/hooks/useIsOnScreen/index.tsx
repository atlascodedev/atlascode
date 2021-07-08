import React from 'react';

function useIsOnScreen<T extends Element>(
  ref: React.MutableRefObject<T>,
  rootMargin = '0px'
): boolean {
  const [isIntersecting, setIsIntersecting] = React.useState<boolean>(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
}

export default useIsOnScreen;
