import { ColorObject } from "../decomposeColor";

function recomposeColor(color: ColorObject | any): string {
  const { type, colorSpace } = color;
  let { values } = color;

  if (type.indexOf("rgb") !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n: any, i: any) => (i < 3 ? parseInt(n, 10) : n));
  } else if (type.indexOf("hsl") !== -1) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }
  if (type.indexOf("color") !== -1) {
    values = `${colorSpace} ${values.join(" ")}`;
  } else {
    values = `${values.join(", ")}`;
  }

  return `${type}(${values})`;
}

export default recomposeColor;
