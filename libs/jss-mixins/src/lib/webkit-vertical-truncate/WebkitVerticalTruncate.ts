import { CSSInterpolation } from '@material-ui/system';

export const webkitVerticalTruncate = (noOfLines: number): CSSInterpolation => {
  return {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: noOfLines,
    WebkitBoxOrient: 'vertical',
  };
};
