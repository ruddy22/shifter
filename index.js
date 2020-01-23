const yargs = require('yargs');
const validationRules = require('./src/validation_rules');
const processInput = require('./src/input_processing');
const main = require('./src/main');
const { compose } = require('./src/helpers');

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
    default: false
  })
  .option('with_zeros', {
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

const processInputFn = processInput.bind(null, argv.separator, validationRules); // (argv.input )
const mainFn = main.bind(null, argv.interactive ? 'interactive' : 'auto', argv.with_zeros);
mainFn(argv.input.split(argv.separator).map(char => parseInt(char, 10)))
