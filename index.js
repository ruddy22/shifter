const yargs = require('yargs');

const argv = yargs
  .option('input', {
    alias: 'n',
    type: 'string',
    description: 'your input, expected seq of numbers (power of 2) separated by comma',
    default: '1,2,4,16',
    required: true
  })
  .option('interactive', {
    alias: 'i',
    type: 'boolean',
    description: 'application interactive mode',
    default: true
  })
  .option('automative', {
    alias: 'a',
    type: 'boolean',
    description: 'application automative mode',
    default: false
  })
  .option('with-zeros', {
    alias: 'z',
    type: 'boolean',
    description: 'add zeros if array will be reduce',
    default: false
  })
  .option('separator', {
    alias: 's',
    type: 'string',
    description: 'your separator variant',
    default: ','
  })
  .help('help')
  .alias('h','help')
  .argv;
