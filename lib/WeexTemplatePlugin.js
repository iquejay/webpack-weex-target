const JsonpMainTemplatePlugin = require("./WeexMainTemplatePlugin");
const JsonpChunkTemplatePlugin = require("webpack/lib/JsonpChunkTemplatePlugin");
const JsonpHotUpdateChunkTemplatePlugin = require("webpack/lib/JsonpHotUpdateChunkTemplatePlugin");

class JsonpTemplatePlugin {
	apply(compiler) {
		compiler.plugin("this-compilation", (compilation) => {
			compilation.mainTemplate.apply(new JsonpMainTemplatePlugin());
			compilation.chunkTemplate.apply(new JsonpChunkTemplatePlugin());
			compilation.hotUpdateChunkTemplate.apply(new JsonpHotUpdateChunkTemplatePlugin());
		});
	}
}

module.exports = JsonpTemplatePlugin;
