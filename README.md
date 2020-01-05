# Nie-badz-januszem-js

## Node configuration
1. `npm init`
2. `npm install eslint --save-dev`

## Source code directory
1. create `src` directory

## Node js modules
2. add `exporting.js` Nodejs module, export `user` object from it
3. add `importing.js` module and import previously exported `user` object

## Eslint configuration
1. `npm install eslint --save-dev`
2. `eslit --init`
4. add to `package.json` `check` task for analyzation all js files in `src` directory

## Webpack configuration
1. `npm install webpack --save-dev`
2. create `webpack.config.js` file and add
```js
const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist')
  }
};
```
3. create `index.html`, `index.js` and `index.scss` files
4. load `index.js` to `index.html` file 
5. `npm install sass-loader node-sass style-loader css-loader --save-dev`
6. change output filename to `index.js` in dist folder
7. add rule to handle `scss` files by webpack