# webpack es6 babel
## Installation
```bash
npm install --save-dev babel-loader @babel/core
```
## Usage
```javascript
module: {
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
}
```

## Create .babelrc configuration file
Great! You've configured Babel but you haven't made it actually do anything. Create a .babelrc config in your project root and enable some plugins.

To start, you can use the env preset, which enables transforms for ES2015+

```bash
npm install @babel/preset-env --save-dev
```

In order to enable the preset you have to define it in your .babelrc file, like this:

```json
{
  "presets": ["@babel/preset-env"]
}
```


