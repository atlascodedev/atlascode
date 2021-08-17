import { CSSInterpolation } from '@material-ui/system';

export const fadeTextTruncate = (
  noOfLines: number,
  lineHeight: number
): CSSInterpolation => {
  return {
    overflow: 'hidden',
    display: 'block',
    lineHeight: `${lineHeight}em`,
    position: 'relative',
    height: `${lineHeight * noOfLines}em`,

    ':after': {
      content: "''",
      textAlign: 'right',
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: '70%',
      height: `${lineHeight}em`,
      background: `linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
      `,
    },
  };
};

export default fadeTextTruncate;
