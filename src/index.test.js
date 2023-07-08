"use strict";

const Fastify = require("fastify");
const plugin = require(".");

describe("JSON-To-XML plugin", () => {
	let server;

	const resBody = {
		"test-key": "test-value",
		"$test-key": "test-value",
	};

	beforeAll(async () => {
		server = Fastify();

		await server
			.register(async (noReplaceInvalidCharContext) => {
				await noReplaceInvalidCharContext
					.register(plugin)
					.get("/no-replace", (req, res) => {
						res.send(resBody);
					});
			})
			.register(async (replaceInvalidCharContext) => {
				await replaceInvalidCharContext
					.register(plugin, {
						replaceInvalidChars: true,
					})
					.get("/replace", (req, res) => {
						res.send(resBody);
					});
			});

		await server.ready();
	});

	afterAll(async () => {
		await server.close();
	});

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

		// TODO: use `it.concurrent.each()` once it is no longer experimental
		it.each(jsonTests)("Returns $testName", async ({ headers }) => {
			const response = await server.inject({
				method: "GET",
				url: "/no-replace",
				headers,
			});

			expect(JSON.parse(response.body)).toStrictEqual(resBody);
			expect(response.headers["content-type"]).toBe(
				"application/json; charset=utf-8"
			);
			expect(response.statusCode).toBe(200);
		});
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
		describe.each(xmlTests)("$testName", ({ headers }) => {
			it("Returns HTTP status code 500 due to invalid XML characters", async () => {
				const response = await server.inject({
					method: "GET",
					url: "/no-replace",
					headers,
				});

				expect(response.body).toBe(
					'<?xml version="1.0" encoding="UTF-8"?><response><statusCode>500</statusCode><error>Internal Server Error</error><message>in XML document > element "response": element name "$test-key" should not contain characters not allowed in XML names</message></response>'
				);
				expect(response.headers["content-type"]).toBe(
					"application/xml; charset=utf-8"
				);
				expect(response.statusCode).toBe(500);
			});

			it("Returns XML body with invalid XML characters replaced", async () => {
				const response = await server.inject({
					method: "GET",
					url: "/replace",
					headers,
				});

				expect(response.body).toBe(
					'<?xml version="1.0" encoding="UTF-8"?><response><test-key>test-value</test-key><�test-key>test-value</�test-key></response>'
				);
				expect(response.headers["content-type"]).toBe(
					"application/xml; charset=utf-8"
				);
				expect(response.statusCode).toBe(200);
			});
		});
	});
});
