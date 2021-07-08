import isObject from "../isObject";

const isEmptyObject = (value: any) =>
  isObject(value) && Object.keys(value).length === 0;

export default isEmptyObject;
