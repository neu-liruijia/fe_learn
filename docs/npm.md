# npm

[[toc]]
## npm 源查看

1. 代码设置
```
npm config get registry  // 查看npm当前镜像源
npm config set registry https://registry.npm.taobao.org/  // 设置npm镜像源为淘宝镜像
```
2. 项目根目录增加 .npmrc文件

```
registry= https://registry.npm.taobao.org/
```

## 同一个项目安装同一个包的不同版本

例如在同一个项目，同时安装antd3 和antd4

```js
npm i case-1.5.3@npm:case@1.5.3
例如：
pagckage：
    "antd": "npm:antd@3.5.2",
    "antd-4": "npm:antd@4.6.1",
```

## npm字段解析
主要讲解下跟入口文件选择字段, [详细说明](https://github.com/SunshowerC/blog/issues/8)
1. main
```js
main属性指定了程序的主入口文件
```
2.browser字段
browser指定该模板供浏览器使用的版本。Browserify这样的浏览器打包工具，通过它就知道该打包那个文件。
```js
"browser": {
  "tipso": "./node_modules/tipso/src/tipso.js"
},
```
3. webpack resolve.mainFields 中字段也会影响加载文件 [mainFields](https://webpack.docschina.org/configuration/resolve/#resolvemainfields)
```js
当 target 属性设置为 webworker, web 或者没有指定：
module.exports = {
  //...
  resolve: {
    mainFields: ['browser', 'module', 'main'],
  },
};
```
```js
对于其他任意的 target（包括 node），默认值为：
module.exports = {
  //...
  resolve: {
    mainFields: ['module', 'main'],
  },
};
```
