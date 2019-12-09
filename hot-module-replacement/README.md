# webpack HMR
Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:

* Retain application state which is lost during a full reload.
* Save valuable development time by only updating what's changed.
* Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools.
## import webpack plugin
```javascript
const webpack = require('webpack')
```
## plugins add HMR
```javascript
plugins: [
    new webpack.HotModuleReplacementPlugin()
]
```

## devServer open HMR
```javascript
devServer: {
    hot: true, // open HMR, defalut false
    hotOnly: true // Do not refresh the page even if the file changes
}
```

## How to monitor the dynamic rendering of file changes?
### JavaScript method
```javascript
import number from "./number"

number()

if (module.hot) {
   // update DOM
    module.hot.accept('./number', () => {
        document.body.removeChild(document.getElementById('number'))
        number()
    })
}
```

### Common updates HMR
Vue-loader、css-loader...
*If there is no HMR function, you need to write it by yourself*
