/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const JsonpChunkTemplatePlugin = require("webpack/lib/web/JsonpChunkTemplatePlugin");
const JsonpHotUpdateChunkTemplatePlugin = require("webpack/lib/web/JsonpHotUpdateChunkTemplatePlugin");
const JsonpMainTemplatePlugin = require("./WeexMainTemplatePlugin");

class JsonpTemplatePlugin {
	apply(compiler) {
		compiler.hooks.thisCompilation.tap("JsonpTemplatePlugin", compilation => {
			new JsonpMainTemplatePlugin().apply(compilation.mainTemplate);
			new JsonpChunkTemplatePlugin().apply(compilation.chunkTemplate);
			new JsonpHotUpdateChunkTemplatePlugin().apply(
				compilation.hotUpdateChunkTemplate
			);
		});
	}
}

module.exports = JsonpTemplatePlugin;
