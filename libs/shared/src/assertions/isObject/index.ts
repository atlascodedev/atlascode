import isArray from "../isArray";

export type Dictionary<T = any> = Record<string, T>;

const isObject = (value: any): value is Dictionary => {
  const type = typeof value;
  return (
    value != null &&
    (type === "object" || type === "function") &&
    !isArray(value)
  );
};

export default isObject;
