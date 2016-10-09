This repo demonstrates the failure while combining CSS Modules + SASS + PostCSS

```sh
npm i

git checkout master
npm start // runs fine

git checkout postcss
npm start // fails

git checkout postcss-without-css-modules
npm start // runs fine
```

## Master

Uses CSS Modules + SASS

```sh
$ git co master

$ npm start

> @ start /Users/UserName/Projects/sass-css-components-fail-example
> webpack-dev-server

[21:48:33] [write-file-webpack-plugin] options { exitOnErrors: true, log: true, test: null, useHashIndex: true }
 http://localhost:8080/webpack-dev-server/
webpack result is served from /static/
content is served from /Users/UserName/Projects/sass-css-components-fail-example
[21:48:34] [write-file-webpack-plugin] compiler.outputFileSystem is "MemoryFileSystem".
[21:48:34] [write-file-webpack-plugin] compiler.options.devServer.outputPath is "/Users/UserName/Projects/sass-css-components-fail-example/static".
[21:48:34] [write-file-webpack-plugin] stats.compilation.errors.length is "0".
[21:48:34] [write-file-webpack-plugin] asset: ./app.js; destination: ./static/app.js [written] (2.25 KB)
[21:48:34] [write-file-webpack-plugin] asset: ./app.css; destination: ./static/app.css [written] (246 B)
[21:48:34] [write-file-webpack-plugin] asset: ./app.js.map; destination: ./static/app.js.map [written] (2.35 KB)
[21:48:34] [write-file-webpack-plugin] asset: ./app.css.map; destination: ./static/app.css.map [written] (84 B)
Hash: 13a3f289495c92f5d5d9
Version: webpack 1.13.2
Time: 720ms
      Asset       Size  Chunks             Chunk Names
     app.js    2.31 kB       0  [emitted]  app
    app.css  246 bytes       0  [emitted]  app
 app.js.map    2.41 kB       0  [emitted]  app
app.css.map   84 bytes       0  [emitted]  app
chunk    {0} app.js, app.css, app.js.map, app.css.map (app) 625 bytes [rendered]
    [0] ./src/index.js 446 bytes {0} [built]
    [1] ./src/styles.scss 83 bytes {0} [built]
    [5] ./src/custom.scss 96 bytes {0} [built]
Child extract-text-webpack-plugin:
    chunk    {0} extract-text-webpack-plugin-output-filename 1.84 kB [rendered]
        [0] ./~/css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]!./~/sass-loader!./src/styles.scss 334 bytes {0} [built]
        [1] ./~/css-loader/lib/css-base.js 1.51 kB {0} [built]
Child extract-text-webpack-plugin:
    chunk    {0} extract-text-webpack-plugin-output-filename 2.5 kB [rendered]
        [0] ./~/css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]!./~/sass-loader!./src/custom.scss 664 bytes {0} [built]
        [1] ./~/css-loader/lib/css-base.js 1.51 kB {0} [built]
        [2] ./~/css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]!./~/sass-loader!./src/styles.scss 334 bytes {0} [built]
webpack: bundle is now VALID.
```

Open [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) in your browser, result should look like this:

![Result](http://i.imgur.com/PQwBbkD.png)

## PostCSS

Uses CSS Modules + SASS + PostCSS

```sh
$ git co postcss

$ npm start

> @ start /Users/UserName/Projects/sass-css-components-fail-example
> webpack-dev-server

[21:50:34] [write-file-webpack-plugin] options { exitOnErrors: true, log: true, test: null, useHashIndex: true }
 http://localhost:8080/webpack-dev-server/
webpack result is served from /static/
content is served from /Users/UserName/Projects/sass-css-components-fail-example
[21:50:35] [write-file-webpack-plugin] compiler.outputFileSystem is "MemoryFileSystem".
[21:50:35] [write-file-webpack-plugin] compiler.options.devServer.outputPath is "/Users/UserName/Projects/sass-css-components-fail-example/static".
Hash: 8e6f0e789e8ecde127af
Version: webpack 1.13.2
Time: 797ms
chunk    {0} app.js, app.css, app.js.map, app.css.map (app) 11.7 kB [rendered]
    [0] ./src/index.js 446 bytes {0} [built]
    [1] ./src/styles.scss 83 bytes {0} [built]
    [3] ./~/css-loader/lib/css-base.js 1.51 kB {0} [built]
    [4] ./~/style-loader/addStyles.js 7.15 kB {0} [built]
    [5] ./src/custom.scss 1.34 kB {0} [built] [failed]
    [6] ./~/css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]!./~/postcss-loader!./~/sass-loader!./src/custom.scss 716 bytes {0} [built]
    [7] ./~/css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]!./~/postcss-loader!./src/styles.scss 504 bytes {0} [built] [1 error]

ERROR in ./~/css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]!./~/postcss-loader!./src/utils.scss
Module build failed: Unknown word (11:14)

   9 |
  10 | @mixin mediaquery($name) {
> 11 |     @media #{map-get($breakpoints, $name)} {
     |              ^
  12 |         @content;
  13 |     }

 @ ./~/css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]!./~/postcss-loader!./src/styles.scss 3:10-176

...

 ```
 ## PostCSS Without css submodules

 Uses SASS + PostCSS

```sh
$ git co postcss-without-css-modules

$ npm start

> @ start /Users/UserName/Projects/sass-css-components-fail-example
> webpack-dev-server

[21:54:20] [write-file-webpack-plugin] options { exitOnErrors: true, log: true, test: null, useHashIndex: true }
 http://localhost:8080/webpack-dev-server/
webpack result is served from /static/
content is served from /Users/UserName/Projects/sass-css-components-fail-example
[21:54:21] [write-file-webpack-plugin] compiler.outputFileSystem is "MemoryFileSystem".
[21:54:21] [write-file-webpack-plugin] compiler.options.devServer.outputPath is "/Users/UserName/Projects/sass-css-components-fail-example/static".
[21:54:21] [write-file-webpack-plugin] stats.compilation.errors.length is "0".
[21:54:21] [write-file-webpack-plugin] asset: ./app.js; destination: ./static/app.js [written] (2.24 KB)
[21:54:21] [write-file-webpack-plugin] asset: ./app.css; destination: ./static/app.css [written] (473 B)
[21:54:21] [write-file-webpack-plugin] asset: ./app.js.map; destination: ./static/app.js.map [written] (2.34 KB)
[21:54:21] [write-file-webpack-plugin] asset: ./app.css.map; destination: ./static/app.css.map [written] (84 B)
Hash: b133af2cdc38b7b8e989
Version: webpack 1.13.2
Time: 754ms
      Asset       Size  Chunks             Chunk Names
     app.js     2.3 kB       0  [emitted]  app
    app.css  473 bytes       0  [emitted]  app
 app.js.map     2.4 kB       0  [emitted]  app
app.css.map   84 bytes       0  [emitted]  app
chunk    {0} app.js, app.css, app.js.map, app.css.map (app) 612 bytes [rendered]
    [0] ./src/index.js 446 bytes {0} [built]
    [1] ./src/styles.scss 83 bytes {0} [built]
    [5] ./src/custom.scss 83 bytes {0} [built]
Child extract-text-webpack-plugin:
    chunk    {0} extract-text-webpack-plugin-output-filename 1.84 kB [rendered]
        [0] ./~/css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]!./~/postcss-loader!./~/sass-loader!./src/styles.scss 334 bytes {0} [built]
        [1] ./~/css-loader/lib/css-base.js 1.51 kB {0} [built]
Child extract-text-webpack-plugin:
    chunk    {0} extract-text-webpack-plugin-output-filename 2.03 kB [rendered]
        [0] ./~/css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]!./~/postcss-loader!./~/sass-loader!./src/custom.scss 524 bytes {0} [built]
        [1] ./~/css-loader/lib/css-base.js 1.51 kB {0} [built]
webpack: bundle is now VALID.
```


