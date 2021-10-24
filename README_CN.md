webpack-weex-target
---
一个用于weex项目中webpack编译的目标，使懒加载在weex中成为可能。

> 该库仅支持webpack3.x版本。

webpack4.x版本请见master分支

## 安装
```
npm install --save-dev webpack-weex-target@1
```

## 注意
当使用webpack-weex-target时，webpack默认的target将不再是web，因此aliasFields将变成空数组。
这可能会影响一些依赖的加载，比如axios库可能会认为运行在node环境而去加载针对node环境的http.js而不是xhr。
这时可以在配置文件中增加如下配置来解决这个问题。
```js
// webpack.config.js
{
  // ...
  resolve: {
    aliasFields: ['browser'],
    // ...
  }
}
```

## 示例
```js
const WeexTemplateTarget = require('webpack-weex-target')

const weexConfig = {
  target: WeexTemplateTarget,
  // ...
  resolve: {
    aliasFields: ['browser']
  }
  // ...
};

module.exports = weexConfig
```

----
请尽情使用吧～