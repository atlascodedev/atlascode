import decomposeColor from "../decomposeColor";
import intToHex from "../intToHex";

/**
 * Converts a color from CSS rgb format to CSS hex format.
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */
function rgbToHex(color: string): string {
  // Idempotent
  if (color.indexOf("#") === 0) {
    return color;
  }

  const { values } = decomposeColor(color);
  return `#${values
    .map((n, i) => intToHex(i === 3 ? Math.round(255 * n) : n))
    .join("")}`;
}

export default rgbToHex;
