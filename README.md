# mpdeploy

[![Build Status][travis-img]][travis-url]
[![Coverage Status][codecov-img]][codecov-url]
[![License][license-img]][license-url]
[![NPM Downloads][downloads-img]][downloads-url]
[![NPM Version][version-img]][version-url]
[![Dependency Status][dependency-img]][dependency-url]
[![devDependency Status][devdependency-img]][devdependency-url]
[![Code Style][style-img]][style-url]

> 微信小程序(游戏)自动发布CLI

## Installation

```shell
$ npm install mpdeploy

# or yarn
$ yarn add mpdeploy
```

## Usage

<!-- TODO: Introduction of Usage -->

```bash
mpdeploy upload 

mpdeploy preview 
```

## API

<!-- TODO: Introduction of API -->

### mpdeploy(input, options?)

#### input

- Type: `string`
- Details: actions upload or preview

#### options

##### ver

- Type: `string`
- Details: miniprogram version

##### workspace

- Type: `string`
- Details: workspace
- Default: `.`

##### type

- Type: `string`
- Details: Project type
- Default: `miniProgram`

##### desc

- Type: `string`
- Details: Project description
- Default: `latest git commit log message`

##### pkp

- Type: `string`
- Details: The MP private key path
- Default: ``

##### proxy

- Type: `string`
- Details: The proxy url
- Default: ``

##### robot

- Type: `string`
- Details: The robot number 1~30
- Default: `1`




## CLI Usage

<!-- TODO: Introduction of CLI -->

Use npx:

```shell
$ npx mpdeploy <input> [options]
```

Globally install:

```shell
$ npm install mpdeploy -g
# or yarn
$ yarn global add mpdeploy
```

```shell
$ mpdeploy --help
demo v0.1.0

Usage:
  $ mpdeploy <input>

Commands:
  <input>  Sample cli program

For more info, run any command with the `--help` flag:
  $ mpdeploy --help

Options:
  --host <host>  Sample options
  -h, --help     Display this message
  -v, --version  Display version number

Examples:
  $ mpdeploy w --host zce.me
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



[travis-img]: https://img.shields.io/travis/com/mick-sun/mpdeploy
[travis-url]: https://travis-ci.com/mick-sun/mpdeploy
[codecov-img]: https://img.shields.io/codecov/c/github/mick-sun/mpdeploy
[codecov-url]: https://codecov.io/gh/mick-sun/mpdeploy
[license-img]: https://img.shields.io/github/license/mick-sun/mpdeploy
[license-url]: https://github.com/mick-sun/mpdeploy/blob/master/LICENSE
[downloads-img]: https://img.shields.io/npm/dm/mpdeploy
[downloads-url]: https://npmjs.org/package/mpdeploy
[version-img]: https://img.shields.io/npm/v/mpdeploy
[version-url]: https://npmjs.org/package/mpdeploy
[dependency-img]: https://img.shields.io/david/mick-sun/mpdeploy
[dependency-url]: https://david-dm.org/mick-sun/mpdeploy
[devdependency-img]: https://img.shields.io/david/dev/mick-sun/mpdeploy
[devdependency-url]: https://david-dm.org/mick-sun/mpdeploy?type=dev
[style-img]: https://img.shields.io/badge/code_style-standard-brightgreen
[style-url]: https://standardjs.com
