### This is the instructions about setting up a Vue application environment.

### Vue environment

---

1. Webpack

2. Babel

3. PostCSS

4. SASS

5. ESlint

- project 1: Webpack

1. Installing webpack

```bash
$ npm init -y
$ npm i webpack webpack-cli
$ touch webpack.config.js
$ touch .gitignore
```

2. configuration

```js
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
};
```

3. run the webpack command.

- solution 1:

```bash
$ ./node_modules/.bin/webpack/
```

- solution 2:

```json
"scripts":{
  "start":"webpack --mode=development",
  "build":"webpack --mode=production"
}
```

4. create a new index.html file, with script to `dist/bundle.js`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="dist/bundle.js"></script>
  </body>
</html>
```

---

- project 2: Babel

1. Installing babel

```bash
$ npm i @babel/core @babel/preset-env babel-loader
```

2. add babel in webpack.config.js

```js
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.js%/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
};
```

3. create babel config file

```bash
$ touch .babelrc
```

4. edting `.babelrc` file.

```js
{
  "presets": ["@babel/preset-env"]
}
```

5. add some ES6 code in file.

```js
export default {
  pepperoni: function () {
    console.log('Pepperoni topping added!');
  },
  bacon: function () {
    console.log('Bacon topping added!');
  },
  myFunc: async function () {
    let myPromise = () => {
      return new Promise((res, rej) => {
        res('this is a message from ES6.');
      });
    };
    const mes = await myPromise();
    console.log(mes);
  },
};
```

6. run command.

```bash
$ npm run start
```

---

- project 3: SASS

1. Installing SASS.

```bash
$ npm i node-sass sass-loader css-loader
```

2. add loader into webpack.config.js

```js
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.js%/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['css-loader', 'sass-loader'],
      },
    ],
  },
};
```

3. create a new file `main.scss`

```scss
h1 {
  color: red;
}
```

4. import the scss file into index.js

```js
import pizza from './pizza';
import './main.scss';

pizza.pepperoni();
pizza.bacon();
pizza.myFunc();
```

5. editing the index.html file. add a h1 tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>HELLO!</h1>
    <script src="dist/bundle.js"></script>
  </body>
</html>
```

- 备注：如果这个时候运行 `npm run start`，则会顺利 bundle，但实际上 h1 还不是红色。

6. install new library

```bash
$ npm i style-loader
```

7. add loader into webpack.config.js

```js
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.js%/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
```

8. install new library

```bash
$ npm i mini-css-extract-plugin
```

9. add loader into webpack.config.js

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.js%/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
  watch: true,
};
```

10. link the style sheet in index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="dist/main.css" />
  </head>
  <body>
    <h1>HELLO!</h1>
    <script src="dist/bundle.js"></script>
  </body>
</html>
```

---

- project 4: SASS features

1. main.scss

```scss
@import 'variables';

h1 {
  color: $red;

  span {
    color: $blue;
  }

  &:hover {
    color: darken($red, 10%);
  }
}
```

2. variables.scss

```scss
$red: #cc3244;
$blue: rgb(28, 28, 184);
```

3. index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="dist/main.css" />
  </head>
  <body>
    <h1>
      HELLO!
      <span>This is a span in H1 tag.</span>
    </h1>
    <script src="dist/bundle.js"></script>
  </body>
</html>
```

---

- project 5: PostCSS `bonus`

1. install

```bash
$ npm i postcss-loader
```

2. editing webpack.config.js

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.js%/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
  watch: true,
};
```

3. install new library

```bash
$ npm i autoprefixer
```

4. new file `postcss.config.js`

```js
module.exports = {
  plugins: {
    autoprefixer: {},
  },
};
```

5. package.json

```json
"browserslist":[
  "> 1%",
  "last 2 versions"
]
```

6. main.scss

```scss
@import 'variables';

h1 {
  color: $red;
  transform: rotate(-7deg);

  span {
    color: $blue;
  }

  &:hover {
    color: darken($red, 10%);
  }
}
```

---

- project 6: ESLint

1. install ESLint

```bash
$ npm i -g eslint
$ eslint --version
```

2. app.js

```js
var foo = 5;
document.write(foo);
```

3. `.eslintrc.json`

```json
{
  "root": true,
  "extends": "eslint:recommended",
  "env": {
    "browser": true
  }
}
```

4. run command:

```bash
$ eslint app.js
```

5. Configuring ESLint with VS Code


