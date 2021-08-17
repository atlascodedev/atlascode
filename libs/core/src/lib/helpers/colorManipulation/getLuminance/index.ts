import decomposeColor from "../decomposeColor";
import hslToRgb from "../hslToRgb";

/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
function getLuminance(color: any): number {
  color = decomposeColor(color);

  let rgb =
    color.type === "hsl"
      ? decomposeColor(hslToRgb(color)).values
      : color.values;
  rgb = rgb.map((val: any) => {
    if (color.type !== "color") {
      val /= 255; // normalized
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });

  // Truncate at 3 digits
  return Number(
    (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)
  );
}

export default getLuminance;
