# 🎯Type-checking for 'Primitive' JS Types

[![License][license-badge]][license-url] [![Travis CI][travis-badge]][travis-url] [![Coverage Status][coverage-badge]][coverage-url] [![Commitizen][commitizen-badge]][commitizen-url]

Type-check for 'Primitive' types in JavaScript are always something to take care when receiving/sending a payload from/to Server/Client application. If you ever wonder how to do this you can sure use `typeof` and make the check by yourself. Or you can user 🎯`js-is-type`!

The usage is simple and verbose. The tests has full coverage and you can use without a doubt.

## Available Types

- `isArray()`
- `isBoolean()`
- `isFunction()`
- `isObject()` (_Remember: in JS, Arrays are Objects!_)
- `isString()`
- `isUndefined()`

## Installation

`js-is-type` is available on npm/yarn:

```bash
$ npm install @codevor/js-is-type --save
$ yarn add @codevor/js-is-type
```

## Usage

### With ES6/import

```js
import { isArray } from '@codevor/js-is-type';

const names = ['Alice', 'Bob'];

isArray(names); // => true
```

### With require

```js
const isArray = require('@codevor/js-is-type').isArray;

const names = ['Alice', 'Bob'];

isArray(names); // => true
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Changelog

This project adheres to [Semantic Versioning](https://semver.org/). Every release, along with the migration instructions, is documented on the Github [Releases](https://github.com/codevor/js-is-type/releases) page.

## Bugs and Sugestions

Report bugs or do suggestions using the [issues](https://github.com/codevor/js-is-type/issues).

## License

[MIT License](LICENSE) © [Codevor](https://github.com/codevor)

[license-badge]: https://img.shields.io/github/license/codevor/js-is-type.svg
[license-url]: https://opensource.org/licenses/MIT
[coverage-badge]: https://coveralls.io/repos/github/codevor/js-is-type/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/codevor/js-is-type?branch=master
[travis-badge]: https://travis-ci.org/codevor/js-is-type.svg?branch=master
[travis-url]: https://travis-ci.org/codevor/js-is-type
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
