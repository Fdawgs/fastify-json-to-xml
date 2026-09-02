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
	const escapedValue = '<tag attr="value">&named;]]>"\'';
	const prototypeKeyBody = JSON.parse(
		'{"__proto__":{"polluted":true},"constructor":{"prototype":{"polluted":true}},"safe":"value"}'
	);

	before(async () => {
		server = Fastify();

		server
			.register(async (noReplaceInvalidCharContext) => {
				noReplaceInvalidCharContext
					.register(plugin)
					.get("/no-replace", (_req, res) => {
						res.send(resBody);
					})
					// Content-Type handling tests
					.get("/buffer", (_req, res) => {
						res.type("application/json").send(
							Buffer.from(JSON.stringify(cleanBody))
						);
					})
					.get("/uppercase-content-type", (_req, res) => {
						res.type("Application/JSON").send(cleanBody);
					})
					.get("/json-seq", (_req, res) => {
						res.type("application/json-seq").send(jsonSequenceBody);
					})
					.get("/control-char-key", (_req, res) => {
						// Key is an invalid XML name; the error message quoting it is invalid XML too
						res.send({ "bad\u0001key": "value" });
					})
					// Vary header tests
					.get("/existing-vary", (_req, res) => {
						res.header("vary", "Accept-Encoding").send(cleanBody);
					})
					.get("/existing-accept-vary", (_req, res) => {
						res.header("vary", "Origin, ACCEPT").send(cleanBody);
					})
					.get("/existing-wildcard-vary", (_req, res) => {
						res.header("vary", "*").send(cleanBody);
					})
					.get("/existing-array-vary-without-accept", (_req, res) => {
						res.header("vary", ["Origin", "Accept-Encoding"]).send(
							cleanBody
						);
					})
					.get("/invalid-vary", (_req, res) => {
						res.header("vary", 1).send(cleanBody);
					})
					// Security tests
					.get("/escaped-value", (_req, res) => {
						res.send({ value: escapedValue });
					})
					.get("/prototype-keys", (_req, res) => {
						res.send(prototypeKeyBody);
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

				t.plan(4);
				t.assert.deepStrictEqual(JSON.parse(response.body), resBody);
				t.assert.strictEqual(
					response.headers["content-type"],
					"application/json; charset=utf-8"
				);
				t.assert.strictEqual(response.headers.vary, "Accept");
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

				t.plan(8);
				t.assert.strictEqual(
					noReplaceResponse.body,
					'<?xml version="1.0" encoding="UTF-8"?><response><statusCode>500</statusCode><error>Internal Server Error</error><message>in XML document > element "response": element name "$test-key" should not contain characters not allowed in XML names</message></response>'
				);
				t.assert.strictEqual(
					noReplaceResponse.headers["content-type"],
					"application/xml; charset=utf-8"
				);
				t.assert.strictEqual(noReplaceResponse.headers.vary, "Accept");
				t.assert.strictEqual(noReplaceResponse.statusCode, 500);
				t.assert.strictEqual(
					replaceResponse.body,
					'<?xml version="1.0" encoding="UTF-8"?><response><test-key>test-value</test-key><\uFFFDtest-key>test-value</\uFFFDtest-key></response>'
				);
				t.assert.strictEqual(
					replaceResponse.headers["content-type"],
					"application/xml; charset=utf-8"
				);
				t.assert.strictEqual(replaceResponse.headers.vary, "Accept");
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
				expectedVary: undefined,
			},
			{
				testName: "Returns an application/json-seq body unchanged",
				url: "/json-seq",
				expectedBody: jsonSequenceBody,
				expectedContentType: "application/json-seq; charset=utf-8",
				expectedVary: undefined,
			},
			{
				testName: "Returns XML body if content-type is not lowercase",
				url: "/uppercase-content-type",
				expectedBody:
					'<?xml version="1.0" encoding="UTF-8"?><response><test-key>test-value</test-key></response>',
				expectedContentType: "application/xml; charset=utf-8",
				expectedVary: "Accept",
			},
		];

		const contentTypeTestsLength = contentTypeTests.length;
		for (let i = 0; i < contentTypeTestsLength; i += 1) {
			const {
				testName,
				url,
				expectedBody,
				expectedContentType,
				expectedVary,
			} = contentTypeTests[i];
			// eslint-disable-next-line no-loop-func -- server never reassigned
			it(testName, async (/** @type {TestContext} */ t) => {
				const response = await server.inject({
					method: "GET",
					url,
					headers: {
						accept: "application/xml",
					},
				});

				t.plan(4);
				t.assert.strictEqual(response.body, expectedBody);
				t.assert.strictEqual(
					response.headers["content-type"],
					expectedContentType
				);
				t.assert.strictEqual(response.headers.vary, expectedVary);
				t.assert.strictEqual(response.statusCode, 200);
			});
		}

		it("Keeps JSON content-type if the error response cannot be converted either", async (/** @type {TestContext} */ t) => {
			const response = await server.inject({
				method: "GET",
				url: "/control-char-key",
				headers: {
					accept: "application/xml",
				},
			});

			t.plan(4);
			t.assert.strictEqual(
				JSON.parse(response.body).error,
				"Internal Server Error"
			);
			t.assert.strictEqual(
				response.headers["content-type"],
				"application/json; charset=utf-8"
			);
			t.assert.strictEqual(response.headers.vary, "Accept");
			t.assert.strictEqual(response.statusCode, 500);
		});
	});

	describe("Vary header handling", () => {
		const varyTests = [
			{
				testName: "Appends Accept as a distinct field",
				url: "/existing-vary",
				expectedVary: "Accept-Encoding, Accept",
			},
			{
				testName: "Does not duplicate Accept",
				url: "/existing-accept-vary",
				expectedVary: "Origin, ACCEPT",
			},
			{
				testName: "Preserves a wildcard",
				url: "/existing-wildcard-vary",
				expectedVary: "*",
			},
			{
				testName: "Appends Accept to an array",
				url: "/existing-array-vary-without-accept",
				expectedVary: "Origin, Accept-Encoding, Accept",
			},
			{
				testName: "Replaces an unexpected value type",
				url: "/invalid-vary",
				expectedVary: "Accept",
			},
		];

		const varyTestsLength = varyTests.length;
		for (let i = 0; i < varyTestsLength; i += 1) {
			const { testName, url, expectedVary } = varyTests[i];
			// eslint-disable-next-line no-loop-func -- server never reassigned
			it(testName, async (/** @type {TestContext} */ t) => {
				const response = await server.inject({
					method: "GET",
					url,
				});

				t.plan(1);
				t.assert.deepStrictEqual(response.headers.vary, expectedVary);
			});
		}
	});

	describe("Security handling", () => {
		it("Escapes XML structural characters in values", async (/** @type {TestContext} */ t) => {
			const response = await server.inject({
				method: "GET",
				url: "/escaped-value",
				headers: {
					accept: "application/xml",
				},
			});

			t.plan(6);
			t.assert.strictEqual(response.statusCode, 200);
			t.assert.strictEqual(
				response.headers["content-type"],
				"application/xml; charset=utf-8"
			);
			t.assert.strictEqual(response.body.includes("&lt;tag"), true);
			t.assert.strictEqual(response.body.includes("&amp;named;"), true);
			t.assert.strictEqual(response.body.includes("<tag"), false);
			t.assert.strictEqual(response.body.includes("]]&gt;"), true);
		});

		it("Rejects prototype-related keys without prototype pollution", async (/** @type {TestContext} */ t) => {
			const response = await server.inject({
				method: "GET",
				url: "/prototype-keys",
				headers: {
					accept: "application/xml",
				},
			});

			t.plan(3);
			t.assert.strictEqual(response.statusCode, 500);
			t.assert.strictEqual(
				response.headers["content-type"],
				"application/xml; charset=utf-8"
			);
			t.assert.strictEqual(
				Object.hasOwn(Object.prototype, "polluted"),
				false
			);
		});
	});
});
