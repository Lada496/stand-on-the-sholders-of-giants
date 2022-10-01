# Webpack and Babel

## Bable

Bable allows us to convert files into otherfiles that older browsers can understand

- What to install
  `yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader`
- What to add
  `.babelrc` in `src` folder

## Webpack

## To use the loader to transpile React code to ES5 JS code

webpack is a kind of coordinator and loader is the actual transpile code down to the version that the browser can understand.

- What to install
  `yarn add webpack webpack-cli`

- What to add
  `webpack.config.js` in `src` folder and `build` script in `package.json`

## To use the loaders to transpile CSS

- What to install
  `yarn add style-loader css-loader`

## To use the loaders to transpile HTML

- What to install
  `yarn add html-loader html-webpack-plugin`
