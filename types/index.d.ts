import type { FastifyPluginAsync } from "fastify";

type FastifyJsonToXml =
	FastifyPluginAsync<fastifyJsonToXml.FastifyJsonToXmlOptions>;

declare namespace fastifyJsonToXml {
	export interface FastifyJsonToXmlOptions {
		replaceInvalidChars?: boolean;
	}

	export const fastifyJsonToXml: FastifyPluginAsync;
	export { fastifyJsonToXml as default };
}

declare function fastifyJsonToXml(
	...params: Parameters<FastifyJsonToXml>
): ReturnType<FastifyJsonToXml>;
export = fastifyJsonToXml;
