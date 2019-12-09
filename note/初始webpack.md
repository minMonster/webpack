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
import Header from './js/header.js'
// ES Moudule 模块导出规范
export default Header
```

```javascript
// ES CommonJS 模块引入规范
var Header = require('./js/header.js')
// ES CommonJS 模块导出规范
module.exports = Header;
```

## 安装 webpack
全局安装 webpack (不推荐使用)
> 如果全局安装之后，如果有两个项目 A B 
> 都会默认使用全局中的 webpack 一旦依赖的版本差距过大 会导致某一个项目不能正常运行
```
// 安装
npm install wepack webpack-cli -g
// 删除
npm uninstall webpck webpack-cli
```
在项目中安装webpack
```
npm install webpack webpack-cli -D
// npx 是 node 中的指令 默认找 node_modules 中的 webpack 执行
npx webpack -v
```
安装指定版本webpack
```
// 查看 都有什么 webpack 版本
npm info webpack

npm install webpack@4.16.5 webpack-cli -D

npx webpack -v

4.16.5
```

## webpack 配置文件

### 打包入口文件
