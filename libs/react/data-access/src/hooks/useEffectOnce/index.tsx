import React from 'react';

const useEffectOnce = (effect: React.EffectCallback) => {
  React.useEffect(effect, []);
};

export default useEffectOnce;
