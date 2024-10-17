SystemJS.config({
  baseURL:'https://unpkg.com/',
  defaultExtension: 'true',
  meta: {
    '*.jsx': {
      'babelOptions': {
        react: true
      }
    }
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'react@latest/umd/react.production.min.js',
    'react-dom': 'react-dom@latest/umd/react-dom.production.min.js',
    'prop-types': 'prop-types@latest/prop-types.js',
    'classnames': 'classnames@latest/index.js',
    '@material-ui/core': '@material-ui/core@latest/umd/material-ui.development.js',
    '@material-ui/icons': '@material-ui/icons@latest/index.js',
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('https://superxnero.github.io/games/App.jsx')
  .catch(console.error.bind(console));