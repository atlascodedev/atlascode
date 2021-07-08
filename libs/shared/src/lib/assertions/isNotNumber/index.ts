const isNotNumber = (value: any) =>
  typeof value !== "number" || Number.isNaN(value) || !Number.isFinite(value);

export default isNotNumber;
