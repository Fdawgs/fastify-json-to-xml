# fastify-json-to-xml

[![GitHub release](https://img.shields.io/github/release/Fdawgs/fastify-json-to-xml.svg)](https://github.com/Fdawgs/fastify-json-to-xml/releases/latest/)
[![npm version](https://img.shields.io/npm/v/fastify-json-to-xml)](https://npmjs.com/package/fastify-json-to-xml)
[![CI](https://github.com/Fdawgs/fastify-json-to-xml/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Fdawgs/fastify-json-to-xml/actions/workflows/ci.yml)
[![Coverage status](https://coveralls.io/repos/github/Fdawgs/fastify-json-to-xml/badge.svg?branch=main)](https://coveralls.io/github/Fdawgs/fastify-json-to-xml?branch=main)
[![code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> Fastify plugin to serialise JSON responses into XML

## Overview

The `fastify-json-to-xml` plugin adds an `onSend` hook that supports serialising 'application/json' responses into XML if:

-   The `Accept` HTTP request header only includes 'application/xml'
-   The `Accept` HTTP request header explicitly includes the 'application/xml' media type before 'application/json'

## Installation

Install using `npm`:

```bash
npm i fastify-json-to-xml
```

For Fastify v4.x support, use `fastify-json-to-xml@1.1.12`.

## Example usage

```js
const Fastify = require("fastify");
const jsonToXml = require("fastify-json-to-xml");

const server = Fastify();
server.register(jsonToXml);

server.get("/", (_req, res) => {
	res.send({ example: "I'm an example value!" });
});

server.listen(3000, (err) => {
	if (err) throw err;
	console.log("Server listening on 3000");
});
```

Make an HTTP GET request to the route above, with application/xml in the `accept` HTTP request header, and the results will look like so:

```xml
<?xml version="1.0" encoding="UTF-8"?><response><example>I'm an example value!</example></response>
```

## Replacing invalid XML characters in output

By default, this plugin will throw an error if the JSON response it is transforming has characters that XML considers invalid, such as "$".
Set `replaceInvalidChars: true` in the plugin options and they will be replaced with the Unicode replacement character (U+FFFD) instead, and the plugin will not throw an error.

For example:

```json
{ "$test-key": "test-value" }
```

Will become:

```xml
<?xml version="1.0" encoding="UTF-8"?><response><�test-key>test-value</�test-key></response>'
```

## Contributing

Contributions are welcome, and any help is greatly appreciated!

See [the contributing guide](https://github.com/Fdawgs/.github/blob/main/CONTRIBUTING.md) for details on how to get started.
Please adhere to this project's [Code of Conduct](https://github.com/Fdawgs/.github/blob/main/CODE_OF_CONDUCT.md) when contributing.

## Acknowledgements

-   [**Aras Abbasi**](https://github.com/uzlopak) - TypeScript support

## License

`fastify-json-to-xml` is licensed under the [MIT](./LICENSE) license.
