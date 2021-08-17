import isArray from "../isArray";
import isEmptyArray from "../isEmptyArray";
import isObject from "../isObject";
import isEmptyObject from "../isEmptyObject";

const isEmpty = (value: any) => {
  if (isArray(value)) return isEmptyArray(value);
  if (isObject(value)) return isEmptyObject(value);
  if (value == null || value === "") return true;
  return false;
};

export default isEmpty;
