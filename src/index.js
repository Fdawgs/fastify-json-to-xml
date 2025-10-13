"use strict";

const fp = require("fastify-plugin");
const accepts = require("accepts");
const { parse: xmlParse } = require("js2xmlparser");
const { parse: secureParse } = require("secure-json-parse");

const ACCEPTED_TYPES = ["application/json", "application/xml"];

/**
 * @typedef {object} FastifyJsonToXmlOptions
 * @property {boolean} [replaceInvalidChars] - Replace invalid XML characters with the Unicode
 * replacement character (U+FFFD). Defaults to false.
 */

/**
 * @author Frazer Smith
 * @description On-send plugin that adds support for serialising 'application/json'
 * responses into XML if the `Accept` HTTP request header only includes
 * 'application/xml'  or if it explicitly includes the 'application/xml'
 * media type before 'application/json'.
 * @type {import("fastify").FastifyPluginCallback<FastifyJsonToXmlOptions>}
 */
function fastifyJsonToXml(server, options, done) {
	const xmlParseOptions = {
		declaration: {
			encoding: "UTF-8",
		},
		format: {
			doubleQuotes: true,
			// Minify output, like Fastify does with JSON responses by default
			pretty: false,
		},
		replaceInvalidChars: options?.replaceInvalidChars === true,
	};

	server.addHook(
		"onSend",
		/** @type {import("fastify").onSendAsyncHookHandler} */
		async function jsonToXml(req, res, payload) {
			if (
				typeof payload === "string" &&
				res
					.getHeader("content-type")
					?.toString()
					.toLowerCase()
					.includes("application/json") &&
				accepts(req.raw).type(ACCEPTED_TYPES) === "application/xml"
			) {
				res.type("application/xml; charset=utf-8");
				return xmlParse(
					"response",
					secureParse(payload),
					xmlParseOptions
				);
			}

			return payload;
		}
	);
	done();
}

module.exports = fp(fastifyJsonToXml, {
	fastify: "5.x",
	name: "fastify-json-to-xml",
}); // CommonJS export
module.exports.default = fastifyJsonToXml; // ESM default export
module.exports.fastifyJsonToXml = fastifyJsonToXml; // TypeScript and named export
