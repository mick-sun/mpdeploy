#!/usr/bin/env node

const cac = require('cac')
const mpdeploy = require('..')
const { name, version } = require('../package')

// Unified error handling
/* istanbul ignore next */
const onError = err => {
  console.error(err.message)
  process.exit(1)
}

process.on('uncaughtException', onError)
process.on('unhandledRejection', onError)

const cli = cac(name)

// TODO: Implement module cli

cli.command('<input>', 'upload or preview')
  .option('--workspace <workspace>', 'Workspace')
  .option('--type <type>', 'Project type, e.g miniProgram | miniProgramPlugin | miniGame | miniGamePlugin')
  .option('--ver <ver>', 'Project version, e.g v1.0.0')
  .option('--desc <desc>', 'Project publish description')
  .option('--pkp <pkp>', 'The private key path')
  .option('--proxy <proxy>', 'The proxy url')
  .option('--robot <robot>', 'The robot number, 1~30')
  .option('--page <page>', 'Preview page path')
  .option('--format <format>', 'Qrcode picture format "image" or "base64"， default "terminal"')
  .option('--query <query>', 'Preview page query params')
  .option('--scene <scene>', 'Scene value, default 1011')
  .example('$ mpdeploy upload --env test --type miniProgram --ver 1.2.0 --desc test')
  .action((input, options) => {
    mpdeploy(input, options)
  })

cli.help().version(version).parse()
