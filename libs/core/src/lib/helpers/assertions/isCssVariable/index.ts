const isCssVariable = (value: string) => {
  return /^var\(--.+\)$/.test(value);
};

export default isCssVariable;
