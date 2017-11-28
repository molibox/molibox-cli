#!/usr/bin/env node
'use strict';
var $logger = require('./logger');
$logger.verbose('index.js is beginning');



var program = require('commander');
//var colors = require('colors/safe');
var packageInfo = require('../../package.json');

program
    .version(packageInfo.version)
    .command('run [name]', 'run specified task');



// https://github.com/tj/commander.js/pull/260
var proc = program.runningCommand;
if (proc) {
    $logger.error('***** error! the program.runningCommand is ' + program.runningCommand);
    proc.on('close', process.exit.bind(process));
    proc.on('error', function() {
        process.exit(1);
    });
}

//脚手架开始
program
    .command('create [dir]')
    .description('生成一个空组件')
    .option('-a, --author <name>', '作者')
    .option('-p, --port <port>', '服务端口号')
    .option('--pkgName <pkgName>', '模块名')
    .option('-v, --tbVersion <version>', '版本号')
    .option('-r, --repoUrl <repoUrl>', '仓库地址')
    .action(require('../create'));
//console.log('????');
program.parse(process.argv);
$logger.verbose('index.js run over!');

// var subCmd = program.args[0];

// if (!subCmd || !(subCmd == 'run' || subCmd == 'create')) {
//     program.help();
// }
