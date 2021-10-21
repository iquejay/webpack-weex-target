const FunctionModulePlugin = require('webpack/lib/FunctionModulePlugin')
const NodeSourcePlugin = require('webpack/lib/node/NodeSourcePlugin')
const LoaderTargetPlugin = require('webpack/lib/LoaderTargetPlugin')

module.exports = function (compiler) {
  const JsonpTemplatePlugin = require("./WeexTemplatePlugin");
  const options = this
  compiler.apply(
    new JsonpTemplatePlugin(options.output),
    new FunctionModulePlugin(options.output),
    new NodeSourcePlugin(options.node),
    new LoaderTargetPlugin('web')
  );
}
