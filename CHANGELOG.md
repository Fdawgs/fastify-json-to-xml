# Changelog

## [2.0.1](https://github.com/Fdawgs/fastify-json-to-xml/compare/v2.0.0...v2.0.1) (2025-01-13)


### Continuous integration

* **cd:** migrate to manifest config ([2db6156](https://github.com/Fdawgs/fastify-json-to-xml/commit/2db61569cc8caf7495d6c5335a23b04f225819fd))
* **ci:** use major tag for coverallsapp/github-action ([13295df](https://github.com/Fdawgs/fastify-json-to-xml/commit/13295dffb6aa82e6fb87cb982096edebe2a719ff))
* **deps:** bump coverallsapp/github-action from 2.3.0 to 2.3.1 ([#110](https://github.com/Fdawgs/fastify-json-to-xml/issues/110)) ([a92b6ff](https://github.com/Fdawgs/fastify-json-to-xml/commit/a92b6ff501ff0a01e817c4e1098cae62344e9858))
* **deps:** bump coverallsapp/github-action from 2.3.1 to 2.3.4 ([#112](https://github.com/Fdawgs/fastify-json-to-xml/issues/112)) ([1c94a55](https://github.com/Fdawgs/fastify-json-to-xml/commit/1c94a55c154d24f09d738faacb15498e6929819b))
* **release-please:** declare schema ([26835f1](https://github.com/Fdawgs/fastify-json-to-xml/commit/26835f16a879b27d00fdd2e28544270f108d813f))


### Dependencies

* **deps-dev:** bump dev dependencies ([44a6121](https://github.com/Fdawgs/fastify-json-to-xml/commit/44a6121d610170c91190c91e144437a3bb989c9e))
* **deps:** bump secure-json-parse ([#119](https://github.com/Fdawgs/fastify-json-to-xml/issues/119)) ([eef0ca5](https://github.com/Fdawgs/fastify-json-to-xml/commit/eef0ca50e0fa1b013512bc8d9917b705a73b4b89))
* migrate from jest to native node:test ([#120](https://github.com/Fdawgs/fastify-json-to-xml/issues/120)) ([468c5e3](https://github.com/Fdawgs/fastify-json-to-xml/commit/468c5e3dd9bbceb11bf2a97e27468c7e43813d51))


### Documentation

* **readme:** rename ci badge to reflect workflow ([ae55b01](https://github.com/Fdawgs/fastify-json-to-xml/commit/ae55b015ad5b77c4ab9dd8359033c96ce39635b6))


### Miscellaneous

* **jsconfig:** set schema ([e1a9878](https://github.com/Fdawgs/fastify-json-to-xml/commit/e1a9878855aaf3e53cd50229abee325e7782a05a))
* **license:** update license year ([c6b6e8c](https://github.com/Fdawgs/fastify-json-to-xml/commit/c6b6e8c1e3af8aaba47fd5e72702eb32b36c87fa))

## [2.0.0](https://github.com/Fdawgs/fastify-json-to-xml/compare/v1.1.12...v2.0.0) (2024-10-02)


### ⚠ BREAKING CHANGES

* dropped support for fastify v4.x
* dropped support for node 14, 16 and 18

### Continuous integration

* **cd:** sort release note sections alphabetically ([19bdcde](https://github.com/Fdawgs/fastify-json-to-xml/commit/19bdcdebd12bc2d09c85a7b8c1d90f0da0c5ec62))
* **deps:** bump coverallsapp/github-action from 2.2.3 to 2.3.0 ([#98](https://github.com/Fdawgs/fastify-json-to-xml/issues/98)) ([aa940f1](https://github.com/Fdawgs/fastify-json-to-xml/commit/aa940f13b12f53238c86c65f309ebb4b77461cec))


### Features

* support fastify v5.x ([42d5c5d](https://github.com/Fdawgs/fastify-json-to-xml/commit/42d5c5db2e7d41eb74bc1a16c032a25266e24f56))


### Miscellaneous

* **.husky/commit-msg:** remove `npx` usage ([ba3698d](https://github.com/Fdawgs/fastify-json-to-xml/commit/ba3698dbfa692e1ff389fc95bc9ebd0ed816e64a))
* **.npmrc:** enforce strict engine checks ([1877f79](https://github.com/Fdawgs/fastify-json-to-xml/commit/1877f79a19d86ea3f19223289826461516842cf0))
* **.npmrc:** remove excess whitespace ([ebcab05](https://github.com/Fdawgs/fastify-json-to-xml/commit/ebcab05748cee1c74132c458950fe5c9bcf559ea))
* drop support for node 14, 16, and 18 ([1b00f02](https://github.com/Fdawgs/fastify-json-to-xml/commit/1b00f021d1c9bafe39e783de58d0f9a57aa11ec1))
* **package:** change author email ([1bbb7a3](https://github.com/Fdawgs/fastify-json-to-xml/commit/1bbb7a390b66596ae009b4e306c4d492804402f8))

## [1.1.12](https://github.com/Fdawgs/fastify-json-to-xml/compare/v1.1.11...v1.1.12) (2024-05-01)


### Bug fixes

* **index:** case-insensitive check of content-type header ([#94](https://github.com/Fdawgs/fastify-json-to-xml/issues/94)) ([a7a1909](https://github.com/Fdawgs/fastify-json-to-xml/commit/a7a1909c098394e227d5a6b7a0d332f95ab07d84))


### Dependencies

* **deps-dev:** bump dev dependencies ([2725ec2](https://github.com/Fdawgs/fastify-json-to-xml/commit/2725ec24dd8e79b33c01bf7d2c4ea98e919b3da1))
* **deps-dev:** bump husky from 8.0.3 to 9.0.6 ([#85](https://github.com/Fdawgs/fastify-json-to-xml/issues/85)) ([290f3fb](https://github.com/Fdawgs/fastify-json-to-xml/commit/290f3fbac24e77ccdee0e5ea895fc3e56e3e00bd))
* **deps-dev:** bump the commitlint group with 2 updates ([#89](https://github.com/Fdawgs/fastify-json-to-xml/issues/89)) ([a7f2d3a](https://github.com/Fdawgs/fastify-json-to-xml/commit/a7f2d3a81cd5f08a4924a88fe2ab48c09e13ee17))


### Miscellaneous

* **.husky:** migrate hooks to v9 style ([4d2590d](https://github.com/Fdawgs/fastify-json-to-xml/commit/4d2590dc4e5236004b4e7036a4bb4070b881f360))
* **.vscode:** fix `prettier.prettierPath` setting ([eb27d09](https://github.com/Fdawgs/fastify-json-to-xml/commit/eb27d094b9581f413eb492ddacdba83f9fd9eb9f))
* **index:** inline comment re export types ([8afc6fa](https://github.com/Fdawgs/fastify-json-to-xml/commit/8afc6fa1ea6f8876f945687cd587a1c02e9dc9e9))
* **index:** sort options object keys ascending ([580001b](https://github.com/Fdawgs/fastify-json-to-xml/commit/580001b2d8af5753121e801c2a4f579202691e18))
* **jsconfig:** enable strict type checking ([101e975](https://github.com/Fdawgs/fastify-json-to-xml/commit/101e97550524918a7b4c3c011052e7517cbf17d6))


### Continuous integration

* **cd:** standardise [@fdawgs](https://github.com/fdawgs) cd workflows ([0d204c5](https://github.com/Fdawgs/fastify-json-to-xml/commit/0d204c5cea1117b5df73cca3d4661299a411b9f8))
* **ci:** audit package signatures and provenance attestations ([fdabf8f](https://github.com/Fdawgs/fastify-json-to-xml/commit/fdabf8f0f914fbce676713fa93b5324aaf3650d7))
* **ci:** standardise [@fdawgs](https://github.com/fdawgs) ci workflows ([21d84cf](https://github.com/Fdawgs/fastify-json-to-xml/commit/21d84cfb8fae1a2ab92d3019daf6e1642d94c0aa))
* **dependabot:** add `[@eslint-community](https://github.com/eslint-community)` scoped deps to eslint group ([e09f24e](https://github.com/Fdawgs/fastify-json-to-xml/commit/e09f24e6878a82064a556a2d0aa352fd6a1a9d19))
* **deps:** bump actions/dependency-review-action from 3 to 4 ([#84](https://github.com/Fdawgs/fastify-json-to-xml/issues/84)) ([da014fc](https://github.com/Fdawgs/fastify-json-to-xml/commit/da014fc8e5d5e99accf895ac068f70c9f4252e20))
* **deps:** bump wagoid/commitlint-github-action from 5 to 6 ([#90](https://github.com/Fdawgs/fastify-json-to-xml/issues/90)) ([ffb7588](https://github.com/Fdawgs/fastify-json-to-xml/commit/ffb7588601645200e13e84ce08dd5637d42d9a1f))
* use latest node lts version ([73064eb](https://github.com/Fdawgs/fastify-json-to-xml/commit/73064eb0f7dad8a5f2fecd1b25674cb40b2d898b))

## [1.1.11](https://github.com/Fdawgs/fastify-json-to-xml/compare/v1.1.10...v1.1.11) (2024-01-25)


### Dependencies

* **deps-dev:** bump dev dependencies ([a3e7630](https://github.com/Fdawgs/fastify-json-to-xml/commit/a3e7630dae1814785010ce4da388b1f239e91fc3))


### Miscellaneous

* **.vscode:** use local prettier version ([ec5b22c](https://github.com/Fdawgs/fastify-json-to-xml/commit/ec5b22c2db39a025ba1ce1722f9efec81245ac5e))
* **jsconfig:** remove `lib`; `target` will be used in absence ([eb569b2](https://github.com/Fdawgs/fastify-json-to-xml/commit/eb569b297f333f605f3c9e79d35317af9e243b41))
* **package:** fix `repository` structure ([b1838aa](https://github.com/Fdawgs/fastify-json-to-xml/commit/b1838aaf8f861c28335f552c37849c6a030fd98c))
* **scripts/license-checker:** handle old license arrays or missing ([6efa793](https://github.com/Fdawgs/fastify-json-to-xml/commit/6efa7936706f13e64b5cfb7b772ba8fe2220b5fb))


### Continuous integration

* **automerge:** optimise inline js scripts ([d807706](https://github.com/Fdawgs/fastify-json-to-xml/commit/d8077068c4a8228f78c77c0e8175f940a0dad736))
* **cd:** publish to github packages with provenance ([ed9ddcf](https://github.com/Fdawgs/fastify-json-to-xml/commit/ed9ddcfd367a5b9d80622d9d5cdf383841c289c6))
* **cd:** use `main` environment for publish-npm job ([5f52584](https://github.com/Fdawgs/fastify-json-to-xml/commit/5f52584daecdfa9bbe6789564a232bc97a1dfd09))

## [1.1.10](https://github.com/Fdawgs/fastify-json-to-xml/compare/v1.1.9...v1.1.10) (2024-01-09)


### Dependencies

* **deps-dev:** bump dev dependencies ([50da0ec](https://github.com/Fdawgs/fastify-json-to-xml/commit/50da0eca6cdb9301edbe91eedcba42cacaca5324))


### Miscellaneous

* jsdoc comments must be complete sentences ([b0ed3d9](https://github.com/Fdawgs/fastify-json-to-xml/commit/b0ed3d9703dc11bfb9ffaa5d6c5a89e72b47fd72))
* **license:** update license year ([54808a9](https://github.com/Fdawgs/fastify-json-to-xml/commit/54808a96fe09c317ab17a352d1e83a3b87b739d7))
* **package:** add `lint:fix` script ([58b6a02](https://github.com/Fdawgs/fastify-json-to-xml/commit/58b6a021296e0805c6a78218fced86bb80c983fb))
* **package:** run `lint:prettier` in `test` script ([47b22fd](https://github.com/Fdawgs/fastify-json-to-xml/commit/47b22fd31997775556529f5f79c4cef7aa25d882))
* use shared files from `fdawgs/.github` ([f0d7bc8](https://github.com/Fdawgs/fastify-json-to-xml/commit/f0d7bc83cae96c141fea973b2725877c0251cfd7))


### Continuous integration

* **cd:** add github packages publish job ([da0bd00](https://github.com/Fdawgs/fastify-json-to-xml/commit/da0bd0047fd9d9634889271c92ca625d64836d2c))
* **dependabot:** ignore release-please-action major updates ([9c4232e](https://github.com/Fdawgs/fastify-json-to-xml/commit/9c4232e9a90785fce81502e499c596c1a665af1e))
* **deps:** bump actions/upload-artifact from 3 to 4 ([#74](https://github.com/Fdawgs/fastify-json-to-xml/issues/74)) ([910088d](https://github.com/Fdawgs/fastify-json-to-xml/commit/910088d8286a7e0fded9b12584ff0668efc215cb))
* **deps:** bump github/codeql-action from 2 to 3 ([#75](https://github.com/Fdawgs/fastify-json-to-xml/issues/75)) ([3823ca5](https://github.com/Fdawgs/fastify-json-to-xml/commit/3823ca5ac153099540718c80db589d42404d85d5))


### Documentation

* **readme:** update links ([7325c16](https://github.com/Fdawgs/fastify-json-to-xml/commit/7325c1656dd656d8f25b764099ef2fc46ed0f444))

## [1.1.9](https://github.com/Fdawgs/fastify-json-to-xml/compare/v1.1.8...v1.1.9) (2023-11-29)


### Bug fixes

* **index:** handle missing `options` param ([f3e5907](https://github.com/Fdawgs/fastify-json-to-xml/commit/f3e5907f90def6c276e3019c2604f91f3069a9b8))


### Dependencies

* **deps-dev:** bump dev dependencies ([e2392f7](https://github.com/Fdawgs/fastify-json-to-xml/commit/e2392f7b7b0509a5905e19349e24e4a8ddb8297e))
* **deps-dev:** bump the commitlint group with 2 updates ([#66](https://github.com/Fdawgs/fastify-json-to-xml/issues/66)) ([3b96bd0](https://github.com/Fdawgs/fastify-json-to-xml/commit/3b96bd00810b48f71c174174593685884878b0cc))
* **deps-dev:** bump the eslint group with 1 update ([#67](https://github.com/Fdawgs/fastify-json-to-xml/issues/67)) ([96e4499](https://github.com/Fdawgs/fastify-json-to-xml/commit/96e449987499dc087e41a7e859fc87bd76066df9))
* **deps-dev:** remove broken eslint-plugin-security-node ([8c692e5](https://github.com/Fdawgs/fastify-json-to-xml/commit/8c692e58a17f9bec5d1a4fa6d230210706c056c6))


### Miscellaneous

* use todo jsdoc tags for inline todo comments ([09bf215](https://github.com/Fdawgs/fastify-json-to-xml/commit/09bf21562d8fa1c66d89bfb74b77463b3546444a))


### Continuous integration

* **deps:** bump actions/github-script from 6 to 7 ([#69](https://github.com/Fdawgs/fastify-json-to-xml/issues/69)) ([1e4b61f](https://github.com/Fdawgs/fastify-json-to-xml/commit/1e4b61f0569c81fb79bba9c1917147d6d7f494ed))
* **deps:** bump actions/setup-node from 3 to 4 ([#65](https://github.com/Fdawgs/fastify-json-to-xml/issues/65)) ([d08ac54](https://github.com/Fdawgs/fastify-json-to-xml/commit/d08ac5478a2880adbcc6a1845b1d3554644b0f41))


### Documentation

* **readme:** fix broken ci badge link ([5323f5b](https://github.com/Fdawgs/fastify-json-to-xml/commit/5323f5b1b3882455d0e3736aea577b5945c84487))
* **readme:** use full cjs for example ([0628300](https://github.com/Fdawgs/fastify-json-to-xml/commit/062830066b9c0837eb986480d07d55e63555148c))

## [1.1.8](https://github.com/Fdawgs/fastify-json-to-xml/compare/v1.1.7...v1.1.8) (2023-10-24)


### Dependencies

* **deps-dev:** add eslint-community/eslint-plugin-eslint-comments ([86234b9](https://github.com/Fdawgs/fastify-json-to-xml/commit/86234b90246c6639269f137afa68fd0ad1e81f55))


### Miscellaneous

* **.vscode:** add github-markdown-preview to recommended extension ([f2b357f](https://github.com/Fdawgs/fastify-json-to-xml/commit/f2b357f0146b1d146d9b8ebc81af655218735b56))
* **.vscode:** add gitlens to recommended extensions ([1754b75](https://github.com/Fdawgs/fastify-json-to-xml/commit/1754b75ccf49a9220221ccbbe96b420ec3f0fd5c))
* **jsconfig:** use es2022 lib ([8cacf7b](https://github.com/Fdawgs/fastify-json-to-xml/commit/8cacf7bef0d4d7d13326d10bc26c37b14952bda4))
* **scripts/license-checker:** update link to deprecated list ([4cea929](https://github.com/Fdawgs/fastify-json-to-xml/commit/4cea9296cd237d710fbebd604e29c8d54b722d02))


### Improvements

* **index:** move options object out of hook ([5c19eee](https://github.com/Fdawgs/fastify-json-to-xml/commit/5c19eee23b14923cd4424eed4a55be37ef60a65a))

## [1.1.7](https://github.com/Fdawgs/fastify-json-to-xml/compare/v1.1.6...v1.1.7) (2023-09-23)


### Miscellaneous

* **.gitattributes:** auto lf eol all files ([460dbff](https://github.com/Fdawgs/fastify-json-to-xml/commit/460dbffbf8e597eb6931bbb2cf988b9c9b245d24))
* add missing `.gitattributes` file ([05e8668](https://github.com/Fdawgs/fastify-json-to-xml/commit/05e8668f8d8ab7b2ad8ea91f333dbc4a5166ec8d))
* change comment blocks with one line into single block ([386b6e9](https://github.com/Fdawgs/fastify-json-to-xml/commit/386b6e9dd05c361165170deff2aa92fa4627cfac))
* **eslintrc:** bump ecma version to 2023 ([d51e3bc](https://github.com/Fdawgs/fastify-json-to-xml/commit/d51e3bc4c42775c6f994fdfe07fa7328681b3022))
* ignore invalid ts errors ([deee1ff](https://github.com/Fdawgs/fastify-json-to-xml/commit/deee1ff92464c807b83ae8059ecfe8f3f00619b5))
* **jsconfig:** set module to nodenext ([3eabf4b](https://github.com/Fdawgs/fastify-json-to-xml/commit/3eabf4b653285ca79d7816852c30d0b18c508b66))
* **jsconfig:** target es2022 ([593eb74](https://github.com/Fdawgs/fastify-json-to-xml/commit/593eb745f129e8425e550edea1294dd6811aa847))
* **package:** explicitly declare js module type ([aba2a18](https://github.com/Fdawgs/fastify-json-to-xml/commit/aba2a18a1008e4df1c59cbde564826a929352cd3))
* **scripts/license-checker:** declare `copyLeftLicenses` type ([7d03443](https://github.com/Fdawgs/fastify-json-to-xml/commit/7d0344386c5ed1cf755016e3dc4a93a2caf40aab))
* **scripts/license-checker:** destruct upath module import ([#58](https://github.com/Fdawgs/fastify-json-to-xml/issues/58)) ([6405989](https://github.com/Fdawgs/fastify-json-to-xml/commit/6405989240215d256bf88dd3a6f8c569441ebadf))
* use `[@see](https://github.com/see)` jsdoc tag for inline comment links ([f2e87f3](https://github.com/Fdawgs/fastify-json-to-xml/commit/f2e87f3208888a67545da4769863884143454d0d))


### Continuous integration

* **dependabot:** group dependabot updates ([ec1f7b6](https://github.com/Fdawgs/fastify-json-to-xml/commit/ec1f7b6d8b277a0e78086c856b4cb5d86e1a5120))
* **deps:** bump actions/checkout from 3 to 4 ([#60](https://github.com/Fdawgs/fastify-json-to-xml/issues/60)) ([6c097a6](https://github.com/Fdawgs/fastify-json-to-xml/commit/6c097a672f7d32f335718fc2076b45891c8e649a))
* **deps:** bump coverallsapp/github-action from 2.2.1 to 2.2.3 ([#61](https://github.com/Fdawgs/fastify-json-to-xml/issues/61)) ([0044841](https://github.com/Fdawgs/fastify-json-to-xml/commit/004484141c33a3d92795aab73ed3842fee169625))


### Improvements

* use `node:` prefix to bypass require.cache call for builtins ([e9743a3](https://github.com/Fdawgs/fastify-json-to-xml/commit/e9743a345c98f73620f88dec19dc359bec3d83b8))


### Documentation

* **readme:** update acknowledgements ([19d7507](https://github.com/Fdawgs/fastify-json-to-xml/commit/19d7507668d9996a6999be6c06624cdc972396a6))

## [1.1.6](https://github.com/Fdawgs/fastify-json-to-xml/compare/v1.1.5...v1.1.6) (2023-08-16)


### Bug fixes

* **index:** check payload is string before converting to obj ([773f705](https://github.com/Fdawgs/fastify-json-to-xml/commit/773f705bf5a238e1c0ec4db3d1be2fb4a86eda38))


### Dependencies

* **deps-dev:** bump dev dependencies ([c2494bb](https://github.com/Fdawgs/fastify-json-to-xml/commit/c2494bb3a51ed4a0174eae95667d6bec392b550a))
* **deps-dev:** bump eslint-config-prettier from 8.10.0 to 9.0.0 ([#50](https://github.com/Fdawgs/fastify-json-to-xml/issues/50)) ([bf1e481](https://github.com/Fdawgs/fastify-json-to-xml/commit/bf1e4812af79a8a49af2928eb0e33d0ea3e0603e))
* **deps:** bump fastify-plugin from 4.5.0 to 4.5.1 ([ae8d5d4](https://github.com/Fdawgs/fastify-json-to-xml/commit/ae8d5d462a7cdb76f83a011f315314618b4d7980))


### Miscellaneous

* **.eslintrc:** error on google closure jsdoc syntax ([70ca201](https://github.com/Fdawgs/fastify-json-to-xml/commit/70ca201212a1232a6f4a53c9a0db657f54d0db1a))
* add jsconfig; type check js ([900eaad](https://github.com/Fdawgs/fastify-json-to-xml/commit/900eaadff78353c946160b37c3018257f5a34503))
* **jsconfig:** add target ([ca8947d](https://github.com/Fdawgs/fastify-json-to-xml/commit/ca8947d6d49e398f264b5f0fd28925f61fb2674e))
* rename `lint:prettier` scripts to reflect their function ([#46](https://github.com/Fdawgs/fastify-json-to-xml/issues/46)) ([18a8b34](https://github.com/Fdawgs/fastify-json-to-xml/commit/18a8b34f90dac2ec2db23202d3dcab9af0e9a4a4))
* **scripts/license-checker:** use `console.error()` to log failures ([30769af](https://github.com/Fdawgs/fastify-json-to-xml/commit/30769af0c5d6ef2ccf0f62dd5b4f1eab023144e6))
* use jsdoc syntax for opt params over google closure syntax ([b39c832](https://github.com/Fdawgs/fastify-json-to-xml/commit/b39c832fd1ece0db28e3c7d92309dfe6c5dfa476))


### Continuous integration

* **ci:** error on new jest snapshot ([85a664a](https://github.com/Fdawgs/fastify-json-to-xml/commit/85a664aef4c0835a9fd6d484abbbf29ad6e23f62))
* **deps:** bump coverallsapp/github-action from 2.2.0 to 2.2.1 ([#48](https://github.com/Fdawgs/fastify-json-to-xml/issues/48)) ([50987f6](https://github.com/Fdawgs/fastify-json-to-xml/commit/50987f6388f683dc5a1eece1a76aad6dc2ac4fe5))


### Improvements

* deconstruct imports ([#49](https://github.com/Fdawgs/fastify-json-to-xml/issues/49)) ([0d6137e](https://github.com/Fdawgs/fastify-json-to-xml/commit/0d6137ed692da890beda209f69edc92ee14a1490))
* **index:** pass raw incoming message to `accepts()` ([6154879](https://github.com/Fdawgs/fastify-json-to-xml/commit/6154879ed2b8aeab60f40455e303ba66c067db08))

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
