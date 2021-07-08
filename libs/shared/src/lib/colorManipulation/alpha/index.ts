import clamp from "../clamp";
import decomposeColor from "../decomposeColor";
import recomposeColor from "../recomposeColor";

/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function alpha(color: string | any, value: number): string {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === "rgb" || color.type === "hsl") {
    color.type += "a";
  }
  if (color.type === "color") {
    color.values[3] = `/${value}`;
  } else {
    color.values[3] = value;
  }

  return recomposeColor(color);
}

export default alpha;
