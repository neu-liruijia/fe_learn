# 模块化

[[toc]]
## Commonjs

1. 特点
```
1. 模块多次加载，运行结果缓存
2. 模块加载会阻塞后续执行，同步加载
3. node.js使用标准
```
2. 关键字

```
1. require
2. module.exports
3. exports
其中：
var exports = module.exports
注意事项：
不能使用 exports = {} ,这样的使用会指向改变，应该 exports.a = {}
```
3. 具体使用
```js
// module-a.js 
module.exports = {a: "test"}
// main.js
var module_a = require("./module-a.js")
module_a.a === "test"

```

## AMD - Asynchronous Module Definition 异步模块定义

1. 特点
```
1. 异步加载
2. 浏览器环境不可以直接使用
3. 不过 AMD 也是支持依赖就近，官方推荐，前置依赖
4. 所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行
```
2. 关键字

```
1. require
2. define
3. define.amd
4. return
其中：
define(id?, dependencies?, factory)：用来定义模块
require命令用于输入其他模块提供的功能
return命令用于规范模块的对外接口
define.amd属性是一个对象
注意事项：
使用AMD，需要在html引入： https://cdn.bootcss.com/require.js/2.3.6/require.min.js
```
3. 使用

```js
//utils.js
define([], function() {
    return {
        add: function(a, b) {
            console.log(a + b)
        }
    }
})
// main.js 文件
require(['./utils'], function(utils) {
    utils.add(1, 2)
})

```


## CMD - Common Module Definition 通用模块定义

1. 特点
```
1. 依赖就近、延迟执行
2. 浏览器环境不可以直接使用
3. 
```
2. 关键字

```
1. require
2. define
其中：
define(id?, dependencies?, factory)：用来定义模块
require命令用于输入其他模块提供的功能
注意事项：
使用AMD，需要在html引入： https://cdn.bootcss.com/seajs/3.0.3/sea.js
```
3. 使用
```js
define(function(require, exports, module) {
  exports.add = function() {
    var sum = 0, i = 0, args = arguments, l = args.length;
    while (i < l) {
      sum += args[i++];
    }
    return sum;
  };
});
// main.js
define(function(require, exports, module) {
   var inc = require('add').add;
  var a = 1;
  inc(a); // 2
  module.id == "program";
});

// 对比 AMD CMD

// AMD
require(['./utils', 'a', 'b'], function(utils) {
    console.log(1)
    // 还没有用到 utils a b 等模块，但是 AMD 已经初始化了所有模块
    console.log(2)
    utils.add(1, 2)
})

//CMD
define(function(require, exports, module){
    console.log(1)
    if(false) {
        var utils = require('./utils') // 需要时再 require，不执行就不会加载
        utils.add(1, 2)
    }
})
```

## UMD - Universal Module Definition  通用模块定义

1. 特点
```
1. AMD 和 CMD 组合
2. 判断是否是AMD，或者是CMD，如果是的话，采用AMD或者CMD，否则采用默认原始代码规范
```
2. 使用
```js
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        //AMD
        define(['utils'], factory)
    } else if (typeof exports === 'object') {
        //CommonJS
        var utils = require('utils')
        module.exports = factory(utils)
    } else {
        root.result = factory(root.utils)
    }
}(this, function(utils) {
    utils.add(1, 2)
}))
```

## ES Modules

1. 特点
```
1. 浏览器中可以使用，不过部分新语法API浏览器不支持
2. 可以在node中使用
3. 编译时候执行
```
2. 关键字
```
1. import
2. export 
3. export default
```