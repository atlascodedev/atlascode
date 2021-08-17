function isFunction(value: any): value is never {
  return typeof value === 'function';
}

export default isFunction;
