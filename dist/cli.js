#!/usr/bin/env node
'use strict';

var _figlet = require('figlet');

var _figlet2 = _interopRequireDefault(_figlet);

var _clear = require('clear');

var _clear2 = _interopRequireDefault(_clear);

var _gauravity = require('./gauravity');

var _gauravity2 = _interopRequireDefault(_gauravity);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _clear2.default)();
(0, _figlet2.default)('gauravity', function (err, data) {
  console.log(data);

  _commander2.default.parse(process.argv);
});

_commander2.default.version('1.0.0').description('Optional params to know more about me.');

_commander2.default.command('about').alias('a').description('Learn More about me').action(function () {
  console.log(_gauravity2.default.about());
});

_commander2.default.command('title').alias('t').description('My current job title').action(function () {
  console.log(_gauravity2.default.title());
});

_commander2.default.command('work').alias('w').description('Currently working at').action(function () {
  console.log(_gauravity2.default.work());
});

_commander2.default.command('social').alias('s').description('My social account').action(function () {
  console.log(_gauravity2.default.social());
});

_commander2.default.command('hobbies').alias('h').description('My hobbies').action(function () {
  console.log(_gauravity2.default.hobbies());
});

_commander2.default.command('priorities').alias('p').description('My priorities').action(function () {
  console.log(_gauravity2.default.priorities());
});

_commander2.default.command('tech').alias('th').description('Technoloies i love to work on ').action(function () {
  console.log(_gauravity2.default.tech());
});