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
 * @description Pre-serialization plugin that adds support for serialising 'application/json'
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
		"preSerialization",
		/** @type {import("fastify").preSerializationHookHandler} */
		async function jsonToXml(req, res, payload) {
			if (
				typeof payload === "object" &&
				payload !== null &&
				accepts(req.raw).type(ACCEPTED_TYPES) === "application/xml"
			) {
				const contentType = res
					.getHeader("content-type")
					?.toString()
					.toLowerCase();

				// Only process if content-type is JSON or XML (or not set yet)
				if (
					!contentType ||
					contentType.includes("application/json") ||
					contentType.includes("application/xml")
				) {
					res.type("application/xml; charset=utf-8");
					// Set a custom serializer that returns the payload as-is (no JSON serialization)
					res.serializer((data) => data);
					// Return the XML string directly
					return xmlParse("response", payload, xmlParseOptions);
				}
			}

			return payload;
		}
	);

	server.addHook(
		"onError",
		/** @type {import("fastify").onErrorHookHandler} */
		async function errorToXml(req, res) {
			if (accepts(req.raw).type(ACCEPTED_TYPES) === "application/xml") {
				// Set content-type early so preSerialization can pick it up
				res.type("application/xml; charset=utf-8");
			}
		}
	);

	// Add onSend hook to handle error responses that were already JSON-serialized
	server.addHook(
		"onSend",
		/** @type {import("fastify").onSendHookHandler} */
		async function errorResponseToXml(req, res, payload) {
			// Handle JSON-serialized error responses that need to be converted to XML
			// This catches error responses that were serialized before we could convert them
			const contentType = res
				.getHeader("content-type")
				?.toString()
				.toLowerCase();

			if (
				typeof payload === "string" &&
				payload.startsWith("{") &&
				contentType &&
				contentType.includes("application/json") &&
				accepts(req.raw).type(ACCEPTED_TYPES) === "application/xml"
			) {
				// Set content-type to XML and convert
				res.type("application/xml; charset=utf-8");
				// Parse the JSON string back to an object and convert to XML
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
