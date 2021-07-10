const commonjs = require('@rollup/plugin-commonjs');

module.exports = (config) => {
  return {
    ...config,
    plugins: [
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          'node_modules/react/index.js': [
            'cloneElement',
            'createContext',
            'Component',
            'createElement',
          ],
          'node_modules/react-dom/index.js': ['render', 'hydrate'],
          'node_modules/react-is/index.js': [
            'isElement',
            'isValidElementType',
            'ForwardRef',
          ],
        },
      }),
    ],
  };
};
