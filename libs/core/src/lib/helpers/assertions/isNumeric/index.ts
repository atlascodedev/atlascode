function isNumeric(value: any) {
  return value != null && value - parseFloat(value) + 1 >= 0;
}

export default isNumeric;
