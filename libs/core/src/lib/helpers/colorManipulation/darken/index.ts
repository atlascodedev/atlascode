import clamp from "../clamp";
import decomposeColor from "../decomposeColor";
import recomposeColor from "../recomposeColor";

/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function darken(color: string | any, coefficient: number): string {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf("hsl") !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (
    color.type.indexOf("rgb") !== -1 ||
    color.type.indexOf("color") !== -1
  ) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color);
}

export default darken;
