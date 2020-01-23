/**
 * @module main.js
 * @author Alexey Petrov
 */

const { getKey } = require('./helpers');
const autoModeFn = require('./auto_mode');
const interactiveModeFn = require('./interactive_mode');

const modes = {
  'auto': autoModeFn,
  'interactive': interactiveModeFn
};

const printResult = (res) => {
  console.log(`Input : ${res.before}`);
  console.log(`Output: ${res.after}`);
  console.log(`Direction list: ${res.directions.join(', ') || "-"}`);
  console.log(`Iteration count: ${res.iterationCount}`);
}

/**
 * main function
 * @param {String} mode
 * @param {Boolean} useZeros
 * @param {Number[]} arr
 * @return {Void}
 */
const main = (mode, useZeros, arr) =>
  printResult(getKey(modes)(mode)(useZeros, arr));

/**
 * module api
 */
module.exports = main;
