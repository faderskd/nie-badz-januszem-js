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
4. add `check` task to `package.json` for analyzation all js files in `src` directory

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
8. `npm i --save-dev html-webpack-plugin`
9. add `html-webpack-plugin` to configuration and use existing `index.html` as template
10. `npm i webpack-merge --save-dev`
11. divide configuration to dev/prod
12. npm `build` task should run prod configuration, npm `dev` task should run dev configuration
13. `npm i webpack-dev-server --save-dev`
14. configure npm `dev` task to serve files from `dist` directory and automatically open browser with `index.html`
as main page
15. `npm i file-loader html-loader --save-dev`
16. add image to `src/assets` directory and attach it to `index.html`
17. configure webpack to handle images using `file-loader` and `html-loader`
18. `npm i clean-webpack-plugin --save-dev`
19. configure webpack to use `clean-webpack-plugin` and clean `dist` directory before next build

## Webpack bundle optimization
1. Create `src/vendor.js` file which will keep all external dependencies e.g. `bootstrap`, `jquery` etc.
2. Configure webpack to load js from two entry points: `index.js` and `vendor.js`
3. Configure prod configuration to output this two scripts as `index.bundle.js` and `vendor.bundle.js` (you can use `contentHash` too in the name)
4. `npm install mini-css-extract-plugin --save-dev`
5. Configure webpack dev config to handle css like so far
6. Configure webpack prod config to output css to separate files
7. Configure `saas-loader` to not minify css (which by default is enabled)
8. Add `optimize-css-assets-webpack-plugin` as a css optimizer
9. Add `terser-webpack-plugin` as js optimizer

## Testing
1. `npm install mocha mocha-webpack webpack-node-externals`
2. add configuration test file
3. add npm `test-mocha` task to test files ending with `.spec.js` ext using `mocha-webpack`
4. `npm install glob jest`
5. add configuration for `jest`
    ```js
        module.exports = {
          'moduleNameMapper': {
            // eslint-disable-next-line max-len
            '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'tests/mocks/fileMock.js',
            '\\.scss$': 'tests/mocks/styleMock.js',
          },
          'moduleFileExtensions': ['js'],
          'testMatch': ['**/*.js'],
          'rootDir': 'tests/bundled',
        };
    ```
6. add npm `test-jest` task to test files ending with `.spec.js` ext using pure `jest`
7. add example tests

## Debugging
1. enable `source mapping` for `dev` mode
2. throw Error in `index.js` file and see stack trace
3. enable `source mapping` for `webpack-mocha` to be able [debug in IDE](http://zinserjan.github.io/mocha-webpack/docs/guides/ide-integration.html#using-mocha-webpack-in-ides) 

