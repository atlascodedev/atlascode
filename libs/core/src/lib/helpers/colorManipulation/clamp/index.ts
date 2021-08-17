/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value: any, min: number = 0, max: number = 1): number {
  if (process.env.NODE_ENV !== "production") {
    if (value < min || value > max) {
      console.error(
        `The value provided ${value} is out of range [${min}, ${max}].`
      );
    }
  }

  return Math.min(Math.max(min, value), max);
}

export default clamp;
