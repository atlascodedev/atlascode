import { Box, BoxProps, useTheme } from '@material-ui/core';
import * as React from 'react';

export interface SvgBlobProps extends Pick<BoxProps, 'sx'> {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary';
}

const SvgBlob = ({
  width = 300,
  height = 200,
  color = 'primary',
  ...props
}: SvgBlobProps) => {
  const theme = useTheme();

  return (
    <Box
      component="svg"
      fill="none"
      // width={'10%'}
      // preserveAspectRatio="xMidYMid meet"
      // height={'10%'}
      viewBox={`0 0 300 295`}
      style={{ width: 'inherit', height: 'inherit' }}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M477.74 15.144c-48.803-27.387-88.993-12.973-123.729 6.63-96.745 54.774-127.749 28.252-219.613 33.73-109.089 6.341-121.146 94.844-91.003 160.572 12.631 27.098 27.846 55.062 19.808 86.196-6.028 24.215-28.42 45.837-41.913 66.881-49.664 76.106-14.64 181.329 128.323 187.959 84.687 4.036 131.48-31.999 197.508-78.7 62.582-44.107 126.026-49.296 200.665-48.72 178.274 1.73 297.41-187.671 13.493-307.596-44.21-19.026-44.21-85.043-83.539-106.952z"
        fill="url(#blob_svg__paint0_linear)"
      />
      <defs>
        <linearGradient
          id="blob_svg__paint0_linear"
          x1={305}
          y1={-26}
          x2={657}
          y2={762}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={theme.palette[color].main} />
          <stop
            offset={1}
            stopColor={theme.palette[color].main}
            stopOpacity={0}
          />
        </linearGradient>
      </defs>
    </Box>
  );
};

export default SvgBlob;
