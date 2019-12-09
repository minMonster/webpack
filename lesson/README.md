# webpack
## webpack 定义
> webpack 模块打包工具
>
> 最早 webpack 只是 js 模块打包工具
>
> webpack 发展到现在并不只能打包 js , .vue .css .html 等等文件
## webpack 支持的模块规范
* ES Moudule
* CommonJS
* CMD
* AMD

```javascript
// ES Moudule 模块引入规范
import Header from './src/js/header.js'
// ES Moudule 模块导出规范
export default Header
```

```javascript
// ES CommonJS 模块引入规范
var Header = require('./src/js/header.js')
// ES CommonJS 模块导出规范
module.exports = Header;
```
