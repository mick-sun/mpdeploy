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

## 安装

```shell
$ npm install mpdeploy

# or yarn
$ yarn add mpdeploy
```

## 使用

### 生成配置文件
执行`mpdeploy init`，自动生成`.mpdeployrc.js`到当前目录 

```js
module.exports = {
  type: 'miniProgram',
  workspace: 'mpdeploy workspace path',
  pkp: 'weixin private key path',
  ver: '',
  desc: '',
  proxy: '',
  robot: '',
  setting: {
    es6: false,
    es7: false,
    minifyJS: false,
    minifyWXML: false,
    minifyWXSS: false,
    minify: true,
    codeProtect: false,
    autoPrefixWXSS: true
  }
}
```

### 上传代码到微信
`mpdeploy upload`

可选参数：(会覆盖`.mpdeployrc.js`中到配置) 

```
--workspace 指定工作目录
--type 指定项目类型 miniProgram | miniProgramPlugin | miniGame | miniGamePlugin
--ver 指定版本号
--desc 指定版本描述
--pkp 指定私钥路径
--proxy 指定代理URL
--robot 指定机器人编号 1~30
```

### 预览小程序 
`mpdeploy preview`
可选参数：(会覆盖`.mpdeployrc.js`中到配置) 

```
--workspace 指定工作目录
--type 指定项目类型 miniProgram | miniProgramPlugin | miniGame | miniGamePlugin
--ver 指定版本号
--desc 指定版本描述
--pkp 指定私钥路径
--proxy 指定代理URL
--robot 指定机器人编号 1~30
```

## CLI Usage
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
