'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cliTable = require('cli-table');

var _cliTable2 = _interopRequireDefault(_cliTable);

var _me = require('./me.json');

var _me2 = _interopRequireDefault(_me);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gauravity = function () {
  function Gauravity() {
    _classCallCheck(this, Gauravity);
  }

  _createClass(Gauravity, null, [{
    key: 'heading',
    value: function heading(title) {
      var o = '\n' + title;
      o += '\n============================================\n';
      return o;
    }
  }, {
    key: 'name',
    value: function name() {
      return this.heading("Full Name") + _me2.default.name;
    }
  }, {
    key: 'about',
    value: function about() {
      return this.heading("About Me") + _me2.default.about.join('\n\n');
    }
  }, {
    key: 'title',
    value: function title() {
      return this.heading("My Current Job Title") + _me2.default.title;
    }
  }, {
    key: 'hobbies',
    value: function hobbies() {
      var table = new _cliTable2.default({
        head: ['Hobbies'],
        colWidths: [40]
      });

      _me2.default.hobbies.map(function (m) {
        table.push([m]);
      });
      return this.heading("My Hobbies") + table.toString();
    }
  }, {
    key: 'priorities',
    value: function priorities() {
      var table = new _cliTable2.default({
        head: ['Priorities'],
        colWidths: [20]
      });

      _me2.default.priorities.map(function (m) {
        table.push([m]);
      });
      return this.heading("My Priorities in Life") + table.toString();
    }
  }, {
    key: 'work',
    value: function work() {
      var table = new _cliTable2.default({
        head: ['Work'],
        colWidths: [40]
      });

      _me2.default.work.map(function (w) {
        table.push([w]);
      });
      return this.heading("Currently working at ") + table.toString();
    }
  }, {
    key: 'tech',
    value: function tech() {
      var table = new _cliTable2.default({
        head: ['Languages '],
        colWidths: [20]
      });

      _me2.default.tech.map(function (w) {
        table.push([w]);
      });
      return this.heading("Technoloies i love to work on ") + table.toString();
    }
  }, {
    key: 'social',
    value: function social() {
      var table = new _cliTable2.default({
        head: ['Social Accounts', '                                  '],
        colWidths: [20, 60]
      });

      for (var s in _me2.default.social) {
        table.push([s, _me2.default.social[s]]);
      }
      return this.heading("Social Accounts") + table.toString();
    }
  }]);

  return Gauravity;
}();

exports.default = Gauravity;