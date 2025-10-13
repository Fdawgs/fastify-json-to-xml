import type { FastifyPluginCallback } from "fastify";

type FastifyJsonToXml =
	FastifyPluginCallback<fastifyJsonToXml.FastifyJsonToXmlOptions>;

declare namespace fastifyJsonToXml {
	export interface FastifyJsonToXmlOptions {
		/** Replace invalid XML characters with the Unicode replacement character (U+FFFD). Defaults to false. */
		replaceInvalidChars?: boolean;
	}

	export const fastifyJsonToXml: FastifyPluginCallback;
	export { fastifyJsonToXml as default };
}

declare function fastifyJsonToXml(
	...params: Parameters<FastifyJsonToXml>
): ReturnType<FastifyJsonToXml>;
export = fastifyJsonToXml;
