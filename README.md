# mpci

[![Build Status][travis-img]][travis-url]
[![Coverage Status][codecov-img]][codecov-url]
[![License][license-img]][license-url]
[![NPM Downloads][downloads-img]][downloads-url]
[![NPM Version][version-img]][version-url]
[![Dependency Status][dependency-img]][dependency-url]
[![devDependency Status][devdependency-img]][devdependency-url]
[![Code Style][style-img]][style-url]

> 微信小程序(游戏)发布助手

## Installation

```shell
$ npm install mpci

# or yarn
$ yarn add mpci
```

## Usage

<!-- TODO: Introduction of Usage -->

```javascript
const mpci = require('mpci')
const result = mpci('w')
// result => 'w@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### mpci(input, options?)

#### input

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## CLI Usage

<!-- TODO: Introduction of CLI -->

Use npx:

```shell
$ npx mpci <input> [options]
```

Globally install:

```shell
$ npm install mpci -g
# or yarn
$ yarn global add mpci
```

```shell
$ mpci --help
demo v0.1.0

Usage:
  $ mpci <input>

Commands:
  <input>  Sample cli program

For more info, run any command with the `--help` flag:
  $ mpci --help

Options:
  --host <host>  Sample options
  -h, --help     Display this message
  -v, --version  Display version number

Examples:
  $ mpci w --host zce.me
```

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [Mick](https://github.com/mick-sun)



[travis-img]: https://img.shields.io/travis/com/mick-sun/mpci
[travis-url]: https://travis-ci.com/mick-sun/mpci
[codecov-img]: https://img.shields.io/codecov/c/github/mick-sun/mpci
[codecov-url]: https://codecov.io/gh/mick-sun/mpci
[license-img]: https://img.shields.io/github/license/mick-sun/mpci
[license-url]: https://github.com/mick-sun/mpci/blob/master/LICENSE
[downloads-img]: https://img.shields.io/npm/dm/mpci
[downloads-url]: https://npmjs.org/package/mpci
[version-img]: https://img.shields.io/npm/v/mpci
[version-url]: https://npmjs.org/package/mpci
[dependency-img]: https://img.shields.io/david/mick-sun/mpci
[dependency-url]: https://david-dm.org/mick-sun/mpci
[devdependency-img]: https://img.shields.io/david/dev/mick-sun/mpci
[devdependency-url]: https://david-dm.org/mick-sun/mpci?type=dev
[style-img]: https://img.shields.io/badge/code_style-standard-brightgreen
[style-url]: https://standardjs.com
