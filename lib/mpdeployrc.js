module.exports = {
  type: 'miniProgram',
  workspace: 'mpdeploy workspace path',
  pkp: 'weixin private key path',
  packagePath: './package.json',
  npmDistDir: './miniprogram',
  ver: '',
  desc: '',
  proxy: '',
  robot: '',
  page: '',
  query: '',
  scene: '',
  format: 'terminal',
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
