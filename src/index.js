"use strict";

const fp = require("fastify-plugin");
const accepts = require("accepts");
const { parse: xmlParse } = require("js2xmlparser");
const { parse: secureParse } = require("secure-json-parse");

/**
 * @author Frazer Smith
 * @description On-send plugin that adds support for serialising 'application/json'
 * responses into XML if the `Accept` HTTP request header only includes
 * 'application/xml'  or if it explicitly includes the 'application/xml'
 * media type before 'application/json'.
 * @param {import("fastify").FastifyInstance} server - Fastify instance.
 * @param {object} [options] - Plugin config values.
 * @param {boolean} [options.replaceInvalidChars] - Replace invalid XML characters with the Unicode
 * replacement character, U+FFFD. Will throw error if invalid characters found when enabled.
 * Disabled by default.
 */
async function fastifyJsonToXml(server, options) {
	const xmlParseOptions = {
		// @ts-ignore: will use `false` if undefined, which is what we want
		replaceInvalidChars: options.replaceInvalidChars || false,
		format: {
			doubleQuotes: true,
			// Minify output, like Fastify does with JSON responses by default
			pretty: false,
		},
		declaration: {
			encoding: "UTF-8",
		},
	};

	server.addHook("onSend", async (req, res, payload) => {
		if (
			res
				.getHeader("content-type")
				?.toString()
				?.includes("application/json") &&
			accepts(req.raw).type(["application/json", "application/xml"]) ===
				"application/xml" &&
			typeof payload === "string"
		) {
			res.type("application/xml; charset=utf-8");
			return xmlParse("response", secureParse(payload), xmlParseOptions);
		}

		return payload;
	});
}

module.exports = fp(fastifyJsonToXml, {
	fastify: "4.x",
	name: "fastify-json-to-xml",
});
module.exports.default = fastifyJsonToXml;
module.exports.fastifyJsonToXml = fastifyJsonToXml;
