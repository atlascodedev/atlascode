import isEmptyObject from "../isEmptyObject";

function isNotEmptyObject(value: any): value is object {
  return value && !isEmptyObject(value);
}

export default isNotEmptyObject;
