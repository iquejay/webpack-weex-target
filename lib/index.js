const FetchCompileWasmTemplatePlugin = require("webpack/lib/web/FetchCompileWasmTemplatePlugin");
const NodeSourcePlugin = require("webpack/lib/node/NodeSourcePlugin");
const FunctionModulePlugin = require("webpack/lib/FunctionModulePlugin");
const LoaderTargetPlugin = require("webpack/lib/LoaderTargetPlugin");
const JsonpTemplatePlugin = require("./WeexTemplatePlugin");
module.exports = function (compiler) {
  const options = this
  new JsonpTemplatePlugin().apply(compiler);
  new FetchCompileWasmTemplatePlugin({
    mangleImports: options.optimization.mangleWasmImports
  }).apply(compiler);
  new FunctionModulePlugin().apply(compiler);
  new NodeSourcePlugin(options.node).apply(compiler);
  new LoaderTargetPlugin('web').apply(compiler);
}