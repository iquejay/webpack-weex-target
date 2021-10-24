webpack-weex-target
---
A weex target for webpack which make lazyload possible in weex

[中文说明](./README_CN.md)

> Only for Webpack 3.x.

for webpack4.0 please see branch master

## Installing
```
npm install --save-dev webpack-weex-target@1
```

## Note
if you use webpack-weex-target, webpack default target will not be 'web', therefor the aliasFields will be '[]'.
This may have an influence on packget dependencies, for example, axios may think runing in node env.
then you can add the config below to resolve this problem.
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

## Example
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

-----
So, make youself!