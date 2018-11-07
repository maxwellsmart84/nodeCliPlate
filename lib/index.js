#!/usr/bin/env node
"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _figlet = _interopRequireDefault(require("figlet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const header = _figlet.default.textSync('NodeCli!', {
  font: 'ogre'
});

_commander.default.version('0.1.0').description(`${header}
    Place holder text for your cli app`).command('test').option('-o, --option', 'sample option').action(cmd => {
  console.log('COMMAND!', cmd);
});

_commander.default.parse(process.argv);

if (!process.argv.slice(2).length) {
  _commander.default.outputHelp();
}
//# sourceMappingURL=index.js.map