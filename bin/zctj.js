#!/usr/bin/env node

const config = require('../package.json')

// 注册一个命令 zctj-cli init
const args = require('process').argv
const command = args[2]
const options = args.slice(3)
// console.log('require("process").argv : ', args, command, options)

// 实现参数解析 --version 和 init  --name
if (command && /^--|-/g.test(command)) {
  // global command
  const globalCommand = command.replace(/^--|-/g, '')

  if (['V', 'version'].includes(globalCommand)) {
    console.log(`zctj-cli verson : v${config.version}`)
  }
}

const utils = require('@zctj-cli/utils')
const core = require('@zctj-cli/core')

console.log(utils(), core())