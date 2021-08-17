const isNumber = (value: any): value is number => {
  return typeof value === "number";
};

export default isNumber;
