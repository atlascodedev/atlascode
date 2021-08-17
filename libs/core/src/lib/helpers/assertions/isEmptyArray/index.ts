import isArray from "../isArray";

const isEmptyArray = (value: any) => isArray(value) && value.length === 0;

export default isEmptyArray;
