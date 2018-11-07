#!/usr/bin/env node
import program from 'commander';
import figlet from 'figlet';

const header = figlet.textSync('NodeCli!', { font: 'ogre' });

program
  .version('0.1.0')
  .description(`${header}
    Place holder text for your cli app`)
  .command('test')
  .option('-o, --option', 'sample option')

  .action((cmd) => {
    console.log('COMMAND!', cmd);
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
