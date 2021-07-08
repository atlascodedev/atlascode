import hexToRgb from "../hextToRgb";

export type ColorFormat = "rgb" | "rgba" | "hsl" | "hsla";
export interface ColorObject {
  type: ColorFormat;
  values: [number, number, number] | [number, number, number, number];
  colorSpace?: "srgb" | "display-p3" | "a98-rgb" | "prophoto-rgb" | "rec-2020";
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */
function decomposeColor(color: any): ColorObject {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color));
  }

  const marker = color.indexOf("(");
  const type = color.substring(0, marker);

  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1) {
    throw new Error(
      "The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()."
    );
  }

  let values = color.substring(marker + 1, color.length - 1);
  let colorSpace;

  if (type === "color") {
    values = values.split(" ");
    colorSpace = values.shift();
    if (values.length === 4 && values[3].charAt(0) === "/") {
      values[3] = values[3].substr(1);
    }
    if (
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        colorSpace
      ) === -1
    ) {
      throw new Error(
        "The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020."
      );
    }
  } else {
    values = values.split(",");
  }
  values = values.map((value: any) => parseFloat(value));

  return { type, values, colorSpace };
}

export default decomposeColor;
