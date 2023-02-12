# fastify-json-to-xml

[![GitHub Release](https://img.shields.io/github/release/Fdawgs/fastify-json-to-xml.svg)](https://github.com/Fdawgs/fastify-json-to-xml/releases/latest/)
[![npm version](https://img.shields.io/npm/v/fastify-json-to-xml)](https://npmjs.com/package/fastify-json-to-xml)
![Build Status](https://github.com/Fdawgs/fastify-json-to-xml/workflows/CI/badge.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/Fdawgs/fastify-json-to-xml/badge.svg?branch=master)](https://coveralls.io/github/Fdawgs/fastify-json-to-xml?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

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

## Example Usage

```js
const Fastify = require("fastify");
const jsonToXml = require("fastify-json-to-xml");

const server = Fastify();
server.register(jsonToXml);

server.get("/", (req, res) => {
	res.send({ example: "I'm an example value!" });
});

await server.listen({ port: 3000 });
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

See [the contributing guide](./CONTRIBUTING.md) for details on how to get started.
Please adhere to this project's [Code of Conduct](./CODE_OF_CONDUCT.md) when contributing.

## License

`fastify-json-to-xml` is licensed under the [MIT](./LICENSE) license.
