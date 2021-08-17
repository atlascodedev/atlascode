import { CSSInterpolation } from '@material-ui/system';

export const addQuotes = (): CSSInterpolation => {
  return {
    quotes: `'"' '"' "'" "'"`,
    ':before': {
      content: 'open-quote',
    },
    ':after': {
      content: 'close-quote',
    },
  };
};
