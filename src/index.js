const fp = require("fastify-plugin");
const accepts = require("accepts");
const js2xmlparser = require("js2xmlparser");
const secJSON = require("secure-json-parse");

/**
 * @author Frazer Smith
 * @description On-send plugin that adds support for serialising 'application/json'
 * responses into XML if the `Accept` HTTP request header only includes
 * 'application/xml'  or if it explicitly includes the 'application/xml'
 * media type before 'application/json'.
 * @param {object} server - Fastify instance.
 * @param {object=} options - Plugin config values.
 * @param {boolean=} options.replaceInvalidChars - Replace invalid XML characters with the Unicode
 * replacement character, U+FFFD. Will throw error if invalid characters found when enabled.
 * Disabled by default.
 */
async function plugin(server, options) {
	server.addHook("onSend", async (req, res, payload) => {
		if (
			res.getHeader("content-type")?.includes("application/json") &&
			accepts(req).type(["application/json", "application/xml"]) ===
				"application/xml"
		) {
			res.type("application/xml; charset=utf-8");
			return js2xmlparser.parse("response", secJSON.parse(payload), {
				replaceInvalidChars: options.replaceInvalidChars || false,
				format: {
					doubleQuotes: true,
					// Minify output, like Fastify does with JSON responses by default
					pretty: false,
				},
				declaration: {
					encoding: "UTF-8",
				},
			});
		}

		return payload;
	});
}

module.exports = fp(plugin, {
	fastify: "4.x",
	name: "fastify-json-to-xml",
});
