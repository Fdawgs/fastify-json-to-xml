"use strict";

const { after, before, describe, it } = require("node:test");
const Fastify = require("fastify");
const plugin = require(".");

describe("JSON-To-XML plugin", () => {
	/** @type {Fastify.FastifyInstance} */
	let server;

	const resBody = {
		"test-key": "test-value",
		"$test-key": "test-value",
	};

	before(async () => {
		server = Fastify({ pluginTimeout: 0 });

		server
			.register(async (noReplaceInvalidCharContext) => {
				noReplaceInvalidCharContext
					.register(plugin)
					.get("/no-replace", (_req, res) => {
						res.send(resBody);
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
		];

		for (const { testName, headers } of jsonTests) {
			// eslint-disable-next-line no-loop-func -- false positive, server use is safe
			it(`Returns ${testName}`, async (t) => {
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
		];

		for (const { testName, headers } of xmlTests) {
			// eslint-disable-next-line no-loop-func -- false positive, server use is safe
			describe(testName, () => {
				it("Returns HTTP status code 500 due to invalid XML characters", async (t) => {
					const response = await server.inject({
						method: "GET",
						url: "/no-replace",
						headers,
					});

					t.plan(3);
					t.assert.strictEqual(
						response.body,
						'<?xml version="1.0" encoding="UTF-8"?><response><statusCode>500</statusCode><error>Internal Server Error</error><message>in XML document > element "response": element name "$test-key" should not contain characters not allowed in XML names</message></response>'
					);
					t.assert.strictEqual(
						response.headers["content-type"],
						"application/xml; charset=utf-8"
					);
					t.assert.strictEqual(response.statusCode, 500);
				});

				it("Returns XML body with invalid XML characters replaced", async (t) => {
					const response = await server.inject({
						method: "GET",
						url: "/replace",
						headers,
					});

					t.plan(3);
					t.assert.strictEqual(
						response.body,
						'<?xml version="1.0" encoding="UTF-8"?><response><test-key>test-value</test-key><�test-key>test-value</�test-key></response>'
					);
					t.assert.strictEqual(
						response.headers["content-type"],
						"application/xml; charset=utf-8"
					);
					t.assert.strictEqual(response.statusCode, 200);
				});
			});
		}
	});
});
