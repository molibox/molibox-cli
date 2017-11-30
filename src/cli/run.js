#!/usr/bin/env node
'use strict';
var $logger = require('./logger');
$logger.verbose('run.js is beginning...');



var program = require('commander');
/*
var colors = require('colors/safe');
colors.setTheme({
    info: ['bold', 'green'],
    list: ['bold', 'blue']
});
*/

program.on('--help', function() {
    $logger.info('Usage');
    console.log();
    $logger.info('$ molibox-cli run build, compile src files to es3 standard');
    $logger.info(' -- help over!')
});

if(typeof process.argv == "object"){
    $logger.verbose('the process.argv is ' + JSON.stringify(process.argv));
}
program.parse(process.argv);

var task = program.args[0];
$logger.verbose('program.args[0] is [' + task + ']');

if (!task) {
    $logger.verbose('program.args[0] is ' + task);
    $logger.verbose('cmd [help] will run......')
    program.help()
    $logger.verbose('cmd [help] run over!')
} else {
    $logger.verbose('gulp will require to run...')
    var gulp = require('gulp');
    require('../gulpfile');
    $logger.verbose('gulp task['+task+'] will run...')
    gulp.start(task);
    $logger.verbose('run.js run over!')
}
