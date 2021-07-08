import React from "react";
import useEffectOnce from "../useEffectOnce";

const useUnmount = (handler: () => any) => {
  const handlerReference = React.useRef(handler);

  //   update every render in case callback changes
  handlerReference.current = handler;

  useEffectOnce(() => () => handlerReference.current());
};

export default useUnmount;
