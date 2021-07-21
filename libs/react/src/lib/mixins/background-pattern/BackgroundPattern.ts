import { bgcolor, CSSInterpolation, darken } from '@material-ui/system';

export const wavyPattern = (
  bgColor: string,
  opacity: number,
  spacing: string,
  patternColor: string
): CSSInterpolation => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    backgroundImage: `repeating-radial-gradient(circle at 0 0, transparent 0, ${bgColor} ${spacing}), repeating-linear-gradient(${darken(
      patternColor,
      0.2
    )}, ${patternColor})`,
  };
};

export const rhombusPattern = (
  bgColor: string,
  opacity: number,
  spacing: string,
  patternColor: string
) => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    backgroundImage: `linear-gradient(135deg, ${patternColor} 25%, transparent 25%), linear-gradient(225deg, ${patternColor} 25%, trasparent 25%), linear-gradient(45deg, ${patternColor} 25%, transparent 25%), linear-gradient(315deg, ${patternColor} 25%, ${bgColor} 25%)`,
    backgroundPosition: `${spacing} 0, ${spacing} 0, 0 0, 0 0`,
    backgroundRepeat: 'repeat',
  };
};

export const zigZag = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
): CSSInterpolation => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    backgroundImage: `linear-gradient(135deg, ${patternColor} 25%, transparent 25%), linear-gradient(225deg, ${patternColor} 25%, transparent 25%), linear-gradient(45deg, ${patternColor} 25%, transparent 25%), linear-gradient(315deg, ${patternColor} 25%, ${bgColor} 25%)`,
    backgroundPosition: `${spacing}px 0, ${spacing}px 0, 0 0, 0 0`,
    backgroundSize: `${Math.round(spacing * 2)} ${Math.round(spacing * 2)}`,
    backgroundRepeat: 'repeat',
  };
};

export const zigZag3D = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
): CSSInterpolation => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    background: `linear-gradient(135deg, ${patternColor} 25%,transparent 25%) -${
      spacing / 2
    }px 0 / ${spacing}px ${spacing}px, linear-gradient(225deg, ${patternColor} 25%, transparent 25%) -${
      spacing / 2
    }px 0 / ${spacing}px ${spacing}px, linear-gradient(315deg, ${patternColor} 25%, transparent 25%) 0px 0 / ${spacing}px ${spacing}px, linear-gradient(45deg, ${patternColor} 25%, ${bgColor} 25%) 0px 0 / ${spacing}px ${spacing}px`,
  };
};

export const moonPattern = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
): CSSInterpolation => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    backgroundImage: `radial-gradient(ellipse farthest-corner at ${
      spacing / 2
    }px ${
      spacing / 2
    }px, ${patternColor}, ${patternColor} 50%, ${bgColor} 50%)`,
  };
};

export const circlePattern = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
): CSSInterpolation => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    backgroundImage: `radial-gradient(circle at center center, ${patternColor}, ${bgColor}), repeating-radial-gradient(circle at center center, ${patternColor}, ${patternColor}, ${
      spacing / 2
    }px, transparent ${spacing}px, transparent ${spacing / 2}px)`,
    backgroundBlendMode: 'multiply',
  };
};

export const diagonalPattern = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
): CSSInterpolation => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    background: `repeating-linear-gradient(45deg, ${patternColor}, ${patternColor} ${
      spacing / 4
    }px, ${bgColor} ${spacing / 4}px, ${bgColor} ${spacing * 1.25}px  )`,
  };
};

export const diagonalPatternInverted = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
): CSSInterpolation => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    background: `repeating-linear-gradient(-45deg, ${patternColor}, ${patternColor} ${
      spacing / 4
    }px, ${bgColor} ${spacing / 4}px, ${bgColor} ${spacing * 1.25}px  )`,
  };
};

export const paperPattern = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
): CSSInterpolation => {
  const spacingOneTenth = `${spacing * 0.1}px`;
  const spacingHalfPercent = `${spacing * 0.05}px`;
  const spacingTwoPointFive = `${spacing * 2.5}px`;
  const spacingHalf = `${spacing / 2}px`;

  return {
    backgroundColor: bgColor,
    opacity: opacity,
    backgroundImage: `linear-image(${patternColor} ${spacingOneTenth}, transparent ${spacingOneTenth}), linear-gradient(90deg, ${patternColor} ${spacingOneTenth}, transparent ${spacingOneTenth}), linear-gradient(${patternColor} ${spacingHalfPercent}, transparent ${spacingHalfPercent}), linear-gradient(90deg, ${patternColor} ${spacingHalfPercent}, ${bgColor} ${spacingHalfPercent})`,
    backgroundSize: `${spacingTwoPointFive} ${spacingTwoPointFive}, ${spacingTwoPointFive} ${spacingTwoPointFive}, ${spacingHalf} ${spacingHalf}, ${spacingHalf} ${spacingHalf}`,
    backgroundPosition: `-${spacingOneTenth} -${spacingOneTenth}, -${spacingOneTenth} -${spacingOneTenth}, -${spacingHalfPercent} -${spacingHalfPercent}, -${spacingHalfPercent} -${spacingHalfPercent}`,
  };
};

export const isometricPattern = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
): CSSInterpolation => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    backgroundImage: `linear-gradient(30deg, ${patternColor} 12%, transparent 12.5%, transparent 87%, ${patternColor} 87.5%, ${patternColor}),
                      linear-gradient(150deg, ${patternColor} 12%, transparent 12.5%, transparent 87%, ${patternColor} 87.5%, ${patternColor}),
                      linear-gradient(30deg, ${patternColor} 12%, transparent 12.5%, transparent 87%, ${patternColor} 87.5%, ${patternColor}),
                      linear-gradient(150deg, ${patternColor} 12%, transparent 12.5%, transparent 87%, ${patternColor} 87.5%, ${patternColor}),
                      linear-gradient(60deg, ${patternColor} 25%, transparent 25.5%, transparent 75%, ${patternColor}  75%, ${patternColor}),
                      linear-gradient(60deg, ${patternColor} 25%, transparent 25.5%, transparent 75%, ${patternColor}  75%, ${patternColor}),
    `,
    backgroundSize: `${spacing * 0.8}px ${spacing * 1.4}px`,
    backgroundPosition: `0 0, 0 0, ${spacing * 0.4}px ${spacing * 0.7}px, ${
      spacing * 0.4
    }px ${spacing * 0.7}px, 0 0, ${spacing * 0.4}px ${spacing * 0.7}px`,
  };
};

export const polkaPattern = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
): CSSInterpolation => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    backgroundImage: `radial-gradient(${patternColor} ${
      spacing * 0.02
    }px, ${bgColor} ${spacing * 0.02}px)`,
    backgroundSize: `${spacing * 0.4}px ${spacing * 0.4}px`,
  };
};

export const polkaPatternAlt = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
): CSSInterpolation => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    backgroundImage: `radial-gradient(${patternColor} ${
      spacing * 0.02
    }px, transparent ${spacing * 0.02}px), radial-gradient(${patternColor} ${
      spacing * 0.02
    }px, ${bgColor} ${spacing * 0.02}px)`,
    backgroundSize: `${spacing * 0.8}px ${spacing * 0.8}px`,
    backgroundPosition: `0 0, ${spacing * 0.4}px ${spacing * 0.4}px`,
  };
};

export const linesPattern = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
): CSSInterpolation => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    backgroundImage: `linear-gradient(0deg, ${bgColor} 50%, ${patternColor} 50%)`,
    backgroundSize: `${spacing * 0.4}px ${spacing * 0.4}px`,
  };
};

export const linesPatternAlt = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
): CSSInterpolation => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    backgroundImage: `linear-gradient(to right, ${patternColor}, ${patternColor} ${
      spacing * 0.2
    }px, ${bgColor} ${spacing * 0.2}px, ${bgColor})`,
    backgroundSize: `${spacing * 0.4}px 100%`,
  };
};

export const diagonalLines = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
): CSSInterpolation => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    backgroundSize: `${spacing * 0.4}px ${spacing * 0.4}px`,
    backgroundImage: `repeating-linear-gradient(45deg, ${patternColor} 0, ${patternColor} 0, ${bgColor} 0, ${bgColor} 50%)`,
  };
};

export const boxesPattern = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
) => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    backgroundImage: `linear-gradient(${patternColor} ${
      spacing * 0.04
    }px, transparent ${
      spacing * 0.04
    }px), linear-gradient(to right, ${patternColor} ${
      spacing * 0.04
    }px, ${bgColor} ${spacing * 0.04}px)`,
    backgroundSize: `${spacing * 0.8}px ${spacing * 0.8}px`,
  };
};

export const linesPatternV3 = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
): CSSInterpolation => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    backgroundSize: `${spacing * 0.8}px ${spacing * 0.8}px`,
    backgroundImage: `repeating-linear-gradient(0deg, ${patternColor}, ${patternColor} ${
      spacing * 0.04
    }px, ${bgColor} ${spacing * 0.04}px, ${bgColor})`,
  };
};

export const linesPatternV4 = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
): CSSInterpolation => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    backgroundSize: `${spacing * 0.8}px ${spacing * 0.8}px`,
    backgroundImage: `repeating-linear-gradient(to right, ${patternColor}, ${patternColor} ${
      spacing * 0.04
    }px, ${bgColor} ${spacing * 0.04}px, ${bgColor})`,
  };
};

export const trianglePattern = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
): CSSInterpolation => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    backgroundImage: `linear-gradient(45deg, ${patternColor} 50%, ${bgColor} 50%)`,
    backgroundSize: `${spacing * 0.4}px ${spacing * 0.4}px`,
  };
};

export const trianglePatternV2 = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
): CSSInterpolation => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    backgroundImage: `linear-gradient(-45deg, ${bgColor}, ${bgColor} 50%, ${patternColor} 50%, ${patternColor})`,
    backgroundSize: `${spacing * 0.4}px ${spacing * 0.4}px`,
  };
};

export const rectanglePattern = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
): CSSInterpolation => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    backgroundPosition: `0 0, ${spacing * 0.4}px  ${spacing * 0.4}px`,
    backgroundSize: `${spacing * 0.8}px ${spacing * 0.8}px`,
    backgroundImage: `repeating-linear-gradient(45deg, ${patternColor} 25%, transparent 25%, transparent 75%, ${patternColor} 75%, ${patternColor}),
                       repeating-linear-gradient(45deg, ${patternColor} 25%, ${bgColor} 25%, ${bgColor} 75%, ${patternColor} 75%, ${patternColor})
    `,
  };
};

export const crossPattern = (
  bgColor: string,
  opacity: number,
  spacing: number,
  patternColor: string
): CSSInterpolation => {
  return {
    backgroundColor: bgColor,
    opacity: opacity,
    backgroundSize: `${spacing * 2}px ${spacing * 2}px, ${spacing * 2}px ${
      spacing * 2
    }px, ${spacing}px ${spacing}px , ${spacing}px ${spacing}px `,
  };
};
