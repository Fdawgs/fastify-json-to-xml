"use strict";

// eslint-disable-next-line n/no-unsupported-features/node-builtins -- Tests, not in distributed code
const { after, before, describe, it } = require("node:test");
const Fastify = require("fastify");
const plugin = require("../src");

/** @typedef {import('node:test').TestContext} TestContext */

describe("JSON-To-XML plugin", () => {
	/** @type {Fastify.FastifyInstance} */
	let server;

	const resBody = {
		"test-key": "test-value",
		"$test-key": "test-value",
	};
	const cleanBody = { "test-key": "test-value" };
	const jsonSequenceBody = `\u001E${JSON.stringify(cleanBody)}\n`;

	before(async () => {
		server = Fastify();

		server
			.register(async (noReplaceInvalidCharContext) => {
				noReplaceInvalidCharContext
					.register(plugin)
					.get("/no-replace", (_req, res) => {
						res.send(resBody);
					})
					.get("/buffer", (_req, res) => {
						res.type("application/json").send(
							Buffer.from(JSON.stringify(cleanBody))
						);
					})
					.get("/text", (_req, res) => {
						res.type("text/plain").send("test-value");
					})
					.get("/uppercase-content-type", (_req, res) => {
						res.type("Application/JSON").send(cleanBody);
					})
					.get("/json-seq", (_req, res) => {
						res.type("application/json-seq").send(jsonSequenceBody);
					});
			})
			.register(async (replaceInvalidCharContext) => {
				replaceInvalidCharContext
					.register(plugin, {
						replaceInvalidChars: true,
					})
					.get("/replace", (_req, res) => {
						res.send(resBody);
					});
			});

		await server.ready();
	});

	after(async () => server.close());

	describe("JSON responses", () => {
		const jsonTests = [
			{
				testName: "JSON body by default",
				headers: {
					accept: "*/*",
				},
			},
			{
				testName: "JSON body",
				headers: {
					accept: "application/json",
				},
			},
			{
				testName:
					"JSON body if 'application/json' before '*/*' in accept header",
				headers: {
					accept: "application/json, */*",
				},
			},
			{
				testName:
					"JSON body if 'application/json' before 'application/xml' in accept header",
				headers: {
					accept: "application/json, application/xml",
				},
			},
			{
				testName: "JSON body if accept header is absent",
				headers: {},
			},
			{
				testName: "JSON body if accept header is empty",
				headers: {
					accept: "",
				},
			},
		];
		const jsonTestsLength = jsonTests.length;

		for (let i = 0; i < jsonTestsLength; i += 1) {
			const { testName, headers } = jsonTests[i];
			// eslint-disable-next-line no-loop-func -- server never reassigned
			it(`Returns ${testName}`, async (/** @type {TestContext} */ t) => {
				const response = await server.inject({
					method: "GET",
					url: "/no-replace",
					headers,
				});

				t.plan(3);
				t.assert.deepStrictEqual(JSON.parse(response.body), resBody);
				t.assert.strictEqual(
					response.headers["content-type"],
					"application/json; charset=utf-8"
				);
				t.assert.strictEqual(response.statusCode, 200);
			});
		}
	});

	describe("XML responses", () => {
		const xmlTests = [
			{
				testName:
					"'application/xml' as only value in accept HTTP request header",
				headers: {
					accept: "application/xml",
				},
			},
			{
				testName:
					"'application/xml' before 'application/json' in accept HTTP request header",
				headers: {
					accept: "application/xml, application/json",
				},
			},
			{
				testName:
					"'APPLICATION/XML' as only value in accept HTTP request header",
				headers: {
					accept: "APPLICATION/XML",
				},
			},
			{
				testName:
					"'application/json' rejected with 'q=0' and a wildcard in accept HTTP request header",
				headers: {
					accept: "application/json;q=0, */*",
				},
			},
			{
				testName: "default browser accept HTTP request header",
				headers: {
					accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
				},
			},
		];
		const xmlTestsLength = xmlTests.length;

		for (let i = 0; i < xmlTestsLength; i += 1) {
			const { testName, headers } = xmlTests[i];
			// eslint-disable-next-line no-loop-func -- server never reassigned
			it(`Returns XML responses for ${testName}`, async (/** @type {TestContext} */ t) => {
				const noReplaceResponse = await server.inject({
					method: "GET",
					url: "/no-replace",
					headers,
				});
				const replaceResponse = await server.inject({
					method: "GET",
					url: "/replace",
					headers,
				});

				t.plan(6);
				t.assert.strictEqual(
					noReplaceResponse.body,
					'<?xml version="1.0" encoding="UTF-8"?><response><statusCode>500</statusCode><error>Internal Server Error</error><message>in XML document > element "response": element name "$test-key" should not contain characters not allowed in XML names</message></response>'
				);
				t.assert.strictEqual(
					noReplaceResponse.headers["content-type"],
					"application/xml; charset=utf-8"
				);
				t.assert.strictEqual(noReplaceResponse.statusCode, 500);
				t.assert.strictEqual(
					replaceResponse.body,
					'<?xml version="1.0" encoding="UTF-8"?><response><test-key>test-value</test-key><\uFFFDtest-key>test-value</\uFFFDtest-key></response>'
				);
				t.assert.strictEqual(
					replaceResponse.headers["content-type"],
					"application/xml; charset=utf-8"
				);
				t.assert.strictEqual(replaceResponse.statusCode, 200);
			});
		}
	});

	describe("Content-Type handling", () => {
		const contentTypeTests = [
			{
				testName: "Returns unchanged body if payload is not a string",
				url: "/buffer",
				expectedBody: JSON.stringify(cleanBody),
				expectedContentType: "application/json",
			},
			{
				testName:
					"Returns unchanged body if content-type is not 'application/json'",
				url: "/text",
				expectedBody: "test-value",
				expectedContentType: "text/plain",
			},
			{
				testName: "Returns an application/json-seq body unchanged",
				url: "/json-seq",
				expectedBody: jsonSequenceBody,
				expectedContentType: "application/json-seq; charset=utf-8",
			},
			{
				testName: "Returns XML body if content-type is not lowercase",
				url: "/uppercase-content-type",
				expectedBody:
					'<?xml version="1.0" encoding="UTF-8"?><response><test-key>test-value</test-key></response>',
				expectedContentType: "application/xml; charset=utf-8",
			},
		];
		const contentTypeTestsLength = contentTypeTests.length;

		for (let i = 0; i < contentTypeTestsLength; i += 1) {
			const { testName, url, expectedBody, expectedContentType } =
				contentTypeTests[i];
			// eslint-disable-next-line no-loop-func -- server never reassigned
			it(testName, async (/** @type {TestContext} */ t) => {
				const response = await server.inject({
					method: "GET",
					url,
					headers: {
						accept: "application/xml",
					},
				});

				t.plan(3);
				t.assert.strictEqual(response.body, expectedBody);
				t.assert.strictEqual(
					response.headers["content-type"],
					expectedContentType
				);
				t.assert.strictEqual(response.statusCode, 200);
			});
		}
	});
});
