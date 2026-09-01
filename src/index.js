"use strict";

const fp = require("fastify-plugin");
const Negotiator = require("negotiator");
const { parse: xmlParse } = require("js2xmlparser");
const { parse: secureParse } = require("secure-json-parse");
const { append: appendVary } = require("vary");

const ACCEPTED_TYPES = ["application/json", "application/xml"];
const JSON_CONTENT_TYPE = "application/json; charset=utf-8";
// Cache
const JSON_CONTENT_TYPE_REG = /^application\/json[ \t]*(?:;|$)/iu;

/**
 * @typedef {object} FastifyJsonToXmlOptions
 * @property {boolean} [replaceInvalidChars] - Replace invalid XML characters with the Unicode
 * replacement character (U+FFFD). Defaults to `false`.
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
		/** @type {import("fastify").onSendHookHandler} */
		function jsonToXml(req, res, payload, hookDone) {
			// Fastify will have serialised JSON into string by this point
			if (typeof payload !== "string") {
				hookDone(null, payload);
				return;
			}

			// Check the existing content-type header to see if the response is JSON
			const contentType = res.getHeader("content-type");
			if (
				typeof contentType !== "string" ||
				(contentType !== JSON_CONTENT_TYPE &&
					!JSON_CONTENT_TYPE_REG.test(contentType))
			) {
				hookDone(null, payload);
				return;
			}

			const varyHeader = res.getHeader("vary");
			if (typeof varyHeader === "string") {
				res.header("vary", appendVary(varyHeader, "Accept"));
			} else if (Array.isArray(varyHeader)) {
				res.header("vary", appendVary(varyHeader.join(", "), "Accept"));
			} else {
				res.header("vary", "Accept");
			}

			// Check the request's Accept header to see if the client wants XML
			if (
				new Negotiator(req.raw).mediaType(ACCEPTED_TYPES) !==
				"application/xml"
			) {
				hookDone(null, payload);
				return;
			}

			res.type("application/xml; charset=utf-8");

			try {
				hookDone(
					null,
					xmlParse("response", secureParse(payload), xmlParseOptions)
				);
			} catch (error) {
				hookDone(/** @type {Error} */ (error));
			}
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
