const Fastify = require("fastify");
const plugin = require(".");

describe("JSON-To-XML plugin", () => {
	let server;

	const resPayload = {
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
						res.send(resPayload);
					});
			})
			.register(async (replaceInvalidCharContext) => {
				await replaceInvalidCharContext
					.register(plugin, {
						replaceInvalidChars: true,
					})
					.get("/replace", (req, res) => {
						res.send(resPayload);
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
				testName: "JSON payload by default",
				request: {
					headers: {
						accept: "*/*",
					},
				},
			},
			{
				testName: "JSON payload",
				request: {
					headers: {
						accept: "application/json",
					},
				},
			},
			{
				testName:
					"JSON payload if 'application/json' before 'application/xml' in accept header",
				request: {
					headers: {
						accept: "application/json, application/xml",
					},
				},
			},
		];
		jsonTests.forEach((testObject) => {
			test(`Should return ${testObject.testName}`, async () => {
				const response = await server.inject({
					method: "GET",
					url: "/no-replace",
					headers: testObject.request.headers,
				});

				expect(JSON.parse(response.payload)).toEqual(resPayload);
				expect(response.headers["content-type"]).toBe(
					"application/json; charset=utf-8"
				);
				expect(response.statusCode).toBe(200);
			});
		});
	});

	describe("XML responses", () => {
		const xmlTests = [
			{
				testName:
					"'application/xml' as only value in accept HTTP request header",
				request: {
					headers: {
						accept: "application/xml",
					},
				},
			},
			{
				testName:
					"application/xml' before 'application/json' in accept HTTP request header",
				request: {
					headers: {
						accept: "application/xml, application/json",
					},
				},
			},
		];
		xmlTests.forEach((testObject) => {
			describe(`${testObject.testName}`, () => {
				test("Should return HTTP status code 500 due to invalid XML characters", async () => {
					const response = await server.inject({
						method: "GET",
						url: "/no-replace",
						headers: testObject.request.headers,
					});

					expect(response.payload).toBe(
						'<?xml version="1.0" encoding="UTF-8"?><response><statusCode>500</statusCode><error>Internal Server Error</error><message>in XML document > element "response": element name "$test-key" should not contain characters not allowed in XML names</message></response>'
					);
					expect(response.headers["content-type"]).toBe(
						"application/xml; charset=utf-8"
					);
					expect(response.statusCode).toBe(500);
				});

				test("Should return XML payload with invalid XML characters replaced", async () => {
					const response = await server.inject({
						method: "GET",
						url: "/replace",
						headers: testObject.request.headers,
					});

					expect(response.payload).toBe(
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
});
