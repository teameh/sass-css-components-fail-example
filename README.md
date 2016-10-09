This repo demonstrates the failure while combining CSS Modules + SASS + PostCSS

```sh
npm i

git checkout master
npm start // runs fine

git checkout postcss
npm start // fails

git checkout log-source
npm start // fails

git checkout no-css-modules
npm start // runs fine
```

It seems as if the sass loader does not handle css-modules well.

## Master example

Uses CSS Modules + SASS

```sh
$ git co master

$ npm start


> @ start /Users/Tieme/Projects/Repos/sass-css-components-fail-example
> webpack-dev-server

[22:51:30] [write-file-webpack-plugin] options { exitOnErrors: true, log: true, test: null, useHashIndex: true }
 http://localhost:8080/webpack-dev-server/
webpack result is served from /static/
content is served from /Users/Tieme/Projects/Repos/sass-css-components-fail-example
[22:51:31] [write-file-webpack-plugin] compiler.outputFileSystem is "MemoryFileSystem".
[22:51:31] [write-file-webpack-plugin] compiler.options.devServer.outputPath is "/Users/Tieme/Projects/Repos/sass-css-components-fail-example/static".
[22:51:31] [write-file-webpack-plugin] stats.compilation.errors.length is "0".
[22:51:31] [write-file-webpack-plugin] asset: ./app.js; destination: ./static/app.js [written] (2.26 KB)
[22:51:31] [write-file-webpack-plugin] asset: ./app.css; destination: ./static/app.css [written] (247 B)
[22:51:31] [write-file-webpack-plugin] asset: ./app.js.map; destination: ./static/app.js.map [written] (2.35 KB)
[22:51:31] [write-file-webpack-plugin] asset: ./app.css.map; destination: ./static/app.css.map [written] (84 B)
Hash: 641f7169b83c763e5767
Version: webpack 1.13.2
Time: 692ms
      Asset       Size  Chunks             Chunk Names
     app.js    2.31 kB       0  [emitted]  app
    app.css  247 bytes       0  [emitted]  app
 app.js.map     2.4 kB       0  [emitted]  app
app.css.map   84 bytes       0  [emitted]  app
chunk    {0} app.js, app.css, app.js.map, app.css.map (app) 631 bytes [rendered]
    [0] ./src/index.js 451 bytes {0} [built]
    [1] ./src/styles.scss 83 bytes {0} [built]
    [5] ./src/special.scss 97 bytes {0} [built]
Child extract-text-webpack-plugin:
    chunk    {0} extract-text-webpack-plugin-output-filename 1.84 kB [rendered]
        [0] ./~/css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]!./~/sass-loader!./src/styles.scss 334 bytes {0} [built]
        [1] ./~/css-loader/lib/css-base.js 1.51 kB {0} [built]
Child extract-text-webpack-plugin:
    chunk    {0} extract-text-webpack-plugin-output-filename 2.51 kB [rendered]
        [0] ./~/css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]!./~/sass-loader!./src/special.scss 666 bytes {0} [built]
        [1] ./~/css-loader/lib/css-base.js 1.51 kB {0} [built]
        [2] ./~/css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]!./~/sass-loader!./src/styles.scss 334 bytes {0} [built]
webpack: bundle is now VALID.
```

Open [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) in your browser, result should look like this:

![Result](http://i.imgur.com/PQwBbkD.png)

Runs fine. See [webpack.master.log](https://github.com/tiemevanveen/sass-css-components-fail-example/blob/master/webpack.master.log) for full log.

## PostCSS example

Uses CSS Modules + SASS + PostCSS

```sh
$ git co postcss

$ npm start


> @ start /Users/Tieme/Projects/Repos/sass-css-components-fail-example
> webpack-dev-server

[22:51:47] [write-file-webpack-plugin] options { exitOnErrors: true, log: true, test: null, useHashIndex: true }
 http://localhost:8080/webpack-dev-server/
webpack result is served from /static/
content is served from /Users/Tieme/Projects/Repos/sass-css-components-fail-example
[22:51:47] [write-file-webpack-plugin] compiler.outputFileSystem is "MemoryFileSystem".
[22:51:47] [write-file-webpack-plugin] compiler.options.devServer.outputPath is "/Users/Tieme/Projects/Repos/sass-css-components-fail-example/static".
Hash: b6b9916fa431afaac24f
Version: webpack 1.13.2
Time: 758ms
chunk    {0} app.js, app.css, app.js.map, app.css.map (app) 11.3 kB [rendered]
    [0] ./src/index.js 451 bytes {0} [built]
    [1] ./src/styles.scss 83 bytes {0} [built]
    [3] ./~/css-loader/lib/css-base.js 1.51 kB {0} [built]
    [4] ./~/style-loader/addStyles.js 7.15 kB {0} [built]
    [5] ./src/special.scss 1.34 kB {0} [built] [failed]
    [6] ./~/css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]!./~/postcss-loader!./~/sass-loader!./src/special.scss 718 bytes {0} [built] [1 error]

ERROR in ./~/css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]!./~/postcss-loader!./src/styles.scss
Module build failed: Unknown word (11:14)

   9 |
  10 | @mixin mediaquery($name) {
> 11 |     @media #{map-get($breakpoints, $name)} {
     |              ^
  12 |         @content;
  13 |     }

 @ ./~/css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]!./~/postcss-loader!./~/sass-loader!./src/special.scss 3:10-177 10:28-195

...

 ```
Fails.. see [webpack.postcss.log](https://github.com/tiemevanveen/sass-css-components-fail-example/blob/master/webpack.postcss.log) for full log.

## Log source example

Uses CSS modules + SASS + [Custom source logging module](https://github.com/tiemevanveen/sass-css-components-fail-example/blob/master/loaders/log-source-loader.js)

custom loader is loaded in between css-loader and sass-loader to see what the output of the sass loader is.

```sh
$ git co log-source

$ npm start
```

Fails.. see [webpack.log-source.log](https://github.com/tiemevanveen/sass-css-components-fail-example/blob/master/webpack.log-source.log) for full log.

File is showing full sass, not css...

## No Css Modules example

Uses SASS + Custom source logging module (Same as prev. but without css modules).

This runs fine. See [webpack.no-css-modules.log](https://github.com/tiemevanveen/sass-css-components-fail-example/blob/master/webpack.no-css-modules.log) for full log.

File is showing full sass, not css...


