const fs = require('fs')
const path = require('path')
const ci = require('miniprogram-ci')
const ora = require('ora')
const simpleGit = require('simple-git')

const git = simpleGit()
const rcFileName = '.mpdeployrc.js'
const mpdeployrc = require('./mpdeployrc')

module.exports = async (input, options) => {
  const commands = ['init', 'upload', 'preview', 'packnpm', 'packNpmManually']
  if (!commands.includes(input)) {
    throw new Error('Expected a command, please input init, upload or preview')
  }

  if (input === 'init') {
    fs.writeFileSync(
      path.resolve(rcFileName),
      `module.exports = ${JSON.stringify(mpdeployrc, null, 2)}`
    )
    return
  }

  const rc = require(path.resolve(rcFileName))
  options = Object.assign({}, rc, options)

  if (!options.ver) {
    const tags = await git.tags()
    options.ver = tags.latest
  }

  if (!options.desc) {
    const log = await git.log({ n: 1 })
    options.desc = log.latest.message
  }

  const { workspace, pkp, type } = options

  // get project.config.json
  const configFile = path.resolve(`${workspace}/project.config.json`)
  const { appid } = JSON.parse(fs.readFileSync(configFile, 'utf-8'))

  const project = new ci.Project({
    appid: appid,
    type,
    projectPath: workspace,
    privateKeyPath: pkp,
    ignores: ['node_modules/**/*']
  })

  await methods[input](project, options)
}

const methods = {
  async packnpm (project) {
    const spinner = ora('开始构建NPM').start()
    await ci.packNpm(project)
    spinner.succeed('构建NPM成功')
  },
  async packNpmManually (project, options) {
    const spinner = ora('开始构建NPM').start()
    await ci.packNpmManually({
      packageJsonPath: options.packagePath,
      miniprogramNpmDistDir: options.npmDistDir
    })
    spinner.succeed('构建NPM成功')
  },
  async upload (project, { ver, desc, setting, proxy, robot }) {
    await this.packnpm(project)
    const spinner = ora('开始上传').start()

    try {
      const res = await ci.upload({
        project,
        version: ver,
        desc: desc,
        setting,
        proxy,
        robot,
        onProgressUpdate: (task) => {
          spinner.text = '上传' + task.message
        }
      })
      console.table(res.subPackageInfo)
      console.table(res.pluginInfo)
      spinner.succeed('上传成功')
    } catch (e) {
      spinner.fail('上传失败')
    }
  },
  async preview (project, config) {
    const { desc, setting, workspace, proxy, robot, page, query, scene, format } = config
    await this.packnpm(project)
    const spinner = ora('开始上传').start()

    try {
      const res = await ci.preview({
        project,
        desc,
        setting,
        qrcodeFormat: format,
        qrcodeOutputDest: path.resolve(`${workspace}/preview.jpg`),
        proxy,
        robot,
        onProgressUpdate: (task) => {
          spinner.text = '上传' + task.message
        },
        pagePath: page,
        searchQuery: query,
        scene
      })
      console.table(res.subPackageInfo)
      console.table(res.pluginInfo)
      console.log('QRCode path', path.resolve(`${workspace}/preview.jpg`))
      spinner.succeed('上传成功')
    } catch (e) {
      spinner.fail('上传失败')
    }
  }
}
