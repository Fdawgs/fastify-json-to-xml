# Changelog

## [1.1.5](https://github.com/Fdawgs/fastify-json-to-xml/compare/v1.1.4...v1.1.5) (2023-07-08)


### Miscellaneous

* **.eslintrc:** sort `extends` array ([8b6eb21](https://github.com/Fdawgs/fastify-json-to-xml/commit/8b6eb21b64c862af016c9ee0bc1a754aa881312d))


### Dependencies

* **deps-dev:** add eslint-plugin-regexp ([0842d41](https://github.com/Fdawgs/fastify-json-to-xml/commit/0842d4100930ce6375edaab9d2a6c39b4bda98b3))
* **deps-dev:** bump dev dependencies ([1e3c7d7](https://github.com/Fdawgs/fastify-json-to-xml/commit/1e3c7d7551e7732b2396ca5ff566a231d5ed5435))


### Bug fixes

* add missing strict mode directives ([#43](https://github.com/Fdawgs/fastify-json-to-xml/issues/43)) ([162eafa](https://github.com/Fdawgs/fastify-json-to-xml/commit/162eafa3a37753d2e40fa39604f76b68557b9e36))

## [1.1.4](https://github.com/Fdawgs/fastify-json-to-xml/compare/v1.1.3...v1.1.4) (2023-06-24)


### Continuous integration

* **deps:** bump coverallsapp/github-action from 2.1.2 to 2.2.0 ([#38](https://github.com/Fdawgs/fastify-json-to-xml/issues/38)) ([09fbe8b](https://github.com/Fdawgs/fastify-json-to-xml/commit/09fbe8bea240c001b44223312be29c3563a97566))


### Miscellaneous

* **.eslintrc:** enable additional jest plugin rules ([72235d1](https://github.com/Fdawgs/fastify-json-to-xml/commit/72235d198fa696579be65decb42dd6b229107a4d))
* **.eslintrc:** enable additional jsdoc plugin rules ([6b55472](https://github.com/Fdawgs/fastify-json-to-xml/commit/6b55472d3971e4bb274702d58427a3fae6c1eb57))
* **.eslintrc:** only use jest plugin to lint test-related files ([a705bc0](https://github.com/Fdawgs/fastify-json-to-xml/commit/a705bc06ddf4be6ad9d7d7e1992ac52cbccf3d58))
* import fastify type for server jsdoc param ([f400b7b](https://github.com/Fdawgs/fastify-json-to-xml/commit/f400b7b7570495a3cca20e7634336af81077bb39))
* **package:** remove global jest mock config values ([900ea51](https://github.com/Fdawgs/fastify-json-to-xml/commit/900ea51e49e426bc9a29e94b6c6ac1eecc19cd83))
* **package:** set jest coverage threshold ([b44e9f7](https://github.com/Fdawgs/fastify-json-to-xml/commit/b44e9f7e0735ea3aef83b2974955f6fc6a6f324a))


### Dependencies

* **deps-dev:** bump dev dependencies ([#39](https://github.com/Fdawgs/fastify-json-to-xml/issues/39)) ([a369e0e](https://github.com/Fdawgs/fastify-json-to-xml/commit/a369e0ed4295c5ca92c95a7b346b7caa7c625427))
* **deps-dev:** bump eslint-plugin-jsdoc from 44.2.7 to 46.1.0 ([#34](https://github.com/Fdawgs/fastify-json-to-xml/issues/34)) ([2998c60](https://github.com/Fdawgs/fastify-json-to-xml/commit/2998c609bd0bd2159bf2ce11d0bf522c59337904))

## [1.1.3](https://github.com/Fdawgs/fastify-json-to-xml/compare/v1.1.2...v1.1.3) (2023-05-27)


### Miscellaneous

* **scripts/license-checker:** resolve eslint jsdoc warning ([#28](https://github.com/Fdawgs/fastify-json-to-xml/issues/28)) ([1644f57](https://github.com/Fdawgs/fastify-json-to-xml/commit/1644f57ace21fc86fb54a0a0e30396ca0516f9e6))
* **scripts:** fix inline comment style ([e7d008e](https://github.com/Fdawgs/fastify-json-to-xml/commit/e7d008ec957bfc1aa4c5f21aff129567ce9a2b97))
* use nouns for leading word in function description tags ([#30](https://github.com/Fdawgs/fastify-json-to-xml/issues/30)) ([668ea0e](https://github.com/Fdawgs/fastify-json-to-xml/commit/668ea0e1b12086eefc90c249500dcaca38bf3278))


### Bug fixes

* **index:** handle array of content-type headers ([#32](https://github.com/Fdawgs/fastify-json-to-xml/issues/32)) ([b893bec](https://github.com/Fdawgs/fastify-json-to-xml/commit/b893bec4e637bb3a8b2700a1a3ade3707497b283))


### Dependencies

* **deps-dev:** bump dev dependencies ([#33](https://github.com/Fdawgs/fastify-json-to-xml/issues/33)) ([a19568b](https://github.com/Fdawgs/fastify-json-to-xml/commit/a19568be2e03a8cc6f05bb414c9ffd6ced28084e))

## [1.1.2](https://github.com/Fdawgs/fastify-json-to-xml/compare/v1.1.1...v1.1.2) (2023-04-24)


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 40.3.0 to 43.0.7 ([#24](https://github.com/Fdawgs/fastify-json-to-xml/issues/24)) ([cf3ae94](https://github.com/Fdawgs/fastify-json-to-xml/commit/cf3ae94200264904bb08426de77847597c6d37e3))


### Miscellaneous

* **.prettierrc:** enable `arrowParens` option ([#21](https://github.com/Fdawgs/fastify-json-to-xml/issues/21)) ([69ccaa0](https://github.com/Fdawgs/fastify-json-to-xml/commit/69ccaa0cd71ea7eea5a99426c4ec18d2c312a364))
* support node 14 ([#26](https://github.com/Fdawgs/fastify-json-to-xml/issues/26)) ([61b6d0a](https://github.com/Fdawgs/fastify-json-to-xml/commit/61b6d0a5365174887030df447fce5cc05cd2e695))


### Continuous integration

* **cd:** publish to npm with provenance ([#27](https://github.com/Fdawgs/fastify-json-to-xml/issues/27)) ([80fa9fb](https://github.com/Fdawgs/fastify-json-to-xml/commit/80fa9fb29d56001bfb9a464e0da935718a1e006c))
* **ci:** add node 20 to test matrix ([#25](https://github.com/Fdawgs/fastify-json-to-xml/issues/25)) ([5c4a570](https://github.com/Fdawgs/fastify-json-to-xml/commit/5c4a570b3fda44d65e07e1b28ac33fb0a5534770))
* **deps:** bump coverallsapp/github-action from 2.0.0 to 2.1.2 ([#23](https://github.com/Fdawgs/fastify-json-to-xml/issues/23)) ([15cb40c](https://github.com/Fdawgs/fastify-json-to-xml/commit/15cb40c4a9247a229a6f4cf4d6b898a953f14639))

## [1.1.1](https://github.com/Fdawgs/fastify-json-to-xml/compare/v1.1.0...v1.1.1) (2023-03-31)


### Miscellaneous

* ignore bun lockfile ([#13](https://github.com/Fdawgs/fastify-json-to-xml/issues/13)) ([b76e07b](https://github.com/Fdawgs/fastify-json-to-xml/commit/b76e07b89c122874190063872ae00bd09048bbac))
* **package:** add funding url ([d0d41ec](https://github.com/Fdawgs/fastify-json-to-xml/commit/d0d41ecac4433af926b5cafc09b17f824ea27b52))
* **scripts:** add eslint rule file ([0c1ff74](https://github.com/Fdawgs/fastify-json-to-xml/commit/0c1ff74896982a404b5defeb65ffc2ee52e284f7))
* **scripts:** remove redundant export ([3696c09](https://github.com/Fdawgs/fastify-json-to-xml/commit/3696c09a52eea00916386b1f4b7bdeb75155ecdb))
* **scripts:** sort eslint comments alphabetically ([7c8240f](https://github.com/Fdawgs/fastify-json-to-xml/commit/7c8240fbbe486af810664428c75b3040af0c92e6))
* **scripts:** use js script to check licenses ([#14](https://github.com/Fdawgs/fastify-json-to-xml/issues/14)) ([a557627](https://github.com/Fdawgs/fastify-json-to-xml/commit/a5576271073669df6d631a826a1df19b89e252fb))


### Documentation

* **changelog:** spelling mistake ([79b540e](https://github.com/Fdawgs/fastify-json-to-xml/commit/79b540ec2fa26db204bf81d65e854efb340ba206))
* **contributing:** add link to conventional config ([#16](https://github.com/Fdawgs/fastify-json-to-xml/issues/16)) ([e6f58f4](https://github.com/Fdawgs/fastify-json-to-xml/commit/e6f58f4c61a71c69008a51ceb8f6105bd163dd23))


### Continuous integration

* **dependabot:** change commit message prefix for gh actions to `ci` ([#15](https://github.com/Fdawgs/fastify-json-to-xml/issues/15)) ([507b01d](https://github.com/Fdawgs/fastify-json-to-xml/commit/507b01dfc9aa9f6a7ccdf36936512c4bc4ec4e3e))
* **deps:** bump coverallsapp/github-action from 1.2.3 to 2.0.0 ([#17](https://github.com/Fdawgs/fastify-json-to-xml/issues/17)) ([307922a](https://github.com/Fdawgs/fastify-json-to-xml/commit/307922af88c7b68fca88bb3655cd3f1625786c19))


### Dependencies

* **deps-dev:** bump dev dependencies ([08b119b](https://github.com/Fdawgs/fastify-json-to-xml/commit/08b119b5a8c971987c15263fa51da5187969c107))
* **deps:** bump coverallsapp/github-action from 1.1.3 to 1.2.3 ([#12](https://github.com/Fdawgs/fastify-json-to-xml/issues/12)) ([f81bbe3](https://github.com/Fdawgs/fastify-json-to-xml/commit/f81bbe3e1f2f5771c18a9ae95ffd6bbde610cf3f))

## [1.1.0](https://github.com/Fdawgs/fastify-json-to-xml/compare/v1.0.2...v1.1.0) (2023-02-15)

### Features

-   add nodenext compatibility ([b897446](https://github.com/Fdawgs/fastify-json-to-xml/commit/b8974466022e3d9f21f2dff00066863f07a9f1b5))

### Documentation

-   **readme:** add acknowledgements section ([bd8f65d](https://github.com/Fdawgs/fastify-json-to-xml/commit/bd8f65d95db29883a15b77d8439ce872cd52744b))

## [1.0.2](https://github.com/Fdawgs/fastify-json-to-xml/compare/v1.0.1...v1.0.2) (2023-02-13)

### Documentation

-   **readme:** rename intro to overview ([cca3ca5](https://github.com/Fdawgs/fastify-json-to-xml/commit/cca3ca597b2de1edf2317915944f02c9feaf9324))

### Continuous integration

-   **cd:** use sentence case for changelog headings ([cd367dd](https://github.com/Fdawgs/fastify-json-to-xml/commit/cd367dd72b5c5ad7d95ccf313ad5de0385c70068))

### Dependencies

-   **deps-dev:** bump dev dependencies ([937baed](https://github.com/Fdawgs/fastify-json-to-xml/commit/937baed302958f691c8b8d12f5a49ffa600976c4))

### Miscellaneous

-   grammar fixes ([f604823](https://github.com/Fdawgs/fastify-json-to-xml/commit/f6048239ec3d24dc0a14d762053a409a49b6fc19))
-   rename master branch to main ([#6](https://github.com/Fdawgs/fastify-json-to-xml/issues/6)) ([137fcd5](https://github.com/Fdawgs/fastify-json-to-xml/commit/137fcd5b4c8c50c400b547e0cb2dcd4e9313ca04))
-   use sentence case over ap style for titles and headings ([d21749b](https://github.com/Fdawgs/fastify-json-to-xml/commit/d21749b671a6ca174d2c6458f031d66585d1e14c))

## [1.0.1](https://github.com/Fdawgs/fastify-json-to-xml/compare/v1.0.0...v1.0.1) (2023-02-07)

### Documentation

-   **readme:** tidy example ([d9000f4](https://github.com/Fdawgs/fastify-json-to-xml/commit/d9000f4bf08ef1685350f300689d0bd417dbaf6b))

### Miscellaneous

-   **index:** remove eslint comment ([336a190](https://github.com/Fdawgs/fastify-json-to-xml/commit/336a19041320c9869b3ec1261266fd47a5af1309))
-   **package:** add description ([9fa9e2e](https://github.com/Fdawgs/fastify-json-to-xml/commit/9fa9e2eafd24e8634d3dc0e0298958ce7d0279f3))

## 1.0.0 (2023-02-06)

### Miscellaneous

-   initial commit ([496db82](https://github.com/Fdawgs/fastify-json-to-xml/commit/496db8276237ad86bde8e789f5f0e8e162c30f49))

### Documentation

-   **readme:** update install guidance ([87c6c7e](https://github.com/Fdawgs/fastify-json-to-xml/commit/87c6c7e55a55499336ff017625aa0366fc07608d))

## Changelog
