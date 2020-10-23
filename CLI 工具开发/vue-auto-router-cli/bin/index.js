#!/usr/bin/env node   
//指定脚本解释器为node
console.log('cli start runing');

const program =require('commander');
program.version(require('../package').version)

program
    .command('init <name>')
    .description('init project')
    .action(require('../lib/init'))

program
    .command('refresh')
    .description('refresh routers...')
    .action(require('../lib/refresh'))

program.parse(process.argv);