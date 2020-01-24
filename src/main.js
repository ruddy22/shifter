/**
 * @module main.js
 * @author Alexey Petrov
 */

const { getKey } = require('./helpers');
const autoModeFn = require('./auto_mode');
const interactiveModeFn = require('./interactive_mode');
const engineFn = require('./engine');

/**
 * possible modes
 */
const modes = {
  'auto': autoModeFn,
  'interactive': interactiveModeFn
};

const printResult = (res) => {
  console.log('\n\n===================================================');
  console.log(`Input : ${res.before} [${res.before.length}]`);
  console.log(`Output: ${res.after} [${res.after.length}]`);
  console.log(`Direction list: ${res.directions.join(', ') || "-"}`);
  console.log(`Iteration count: ${res.iterationCount}`);
  console.log('===================================================');
}

/**
 * main function
 * @param {String} mode
 * @param {Boolean} useZeros
 * @param {Number[]} arr
 * @return {Void}
 */
const main = (mode, useZeros, arr) =>
  printResult(engineFn(getKey(modes)(mode), useZeros, arr));

/**
 * module api
 */
module.exports = main;
