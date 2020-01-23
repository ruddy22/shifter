/**
 * @module validation_rules.js
 * @author Petrov Alexey
 */

const {
  inputExists,
  greaterThan1,
  hasNotSpecificChars,
  isNumber,
  isPowerOf2,
  isNotZero,
  containedIn,
} = require('./predicates');

/**
 * makes an error marker object
 * @param {String} errorText
 * @returns {Object}
 */
const makeErrorMarker = (errorText) => ({ errorText: `Error! ${errorText}`, invalid: true });

/**
 * validation rule: antipod for inputExists predicate
 * @param {String} str
 * @returns {Boolean|Object}
 */
const inputIsNotExists = (str) => inputExists(str) || makeErrorMarker('Empty input.');

/**
 * validation rule: input contains less than 2 chars
 * @param {String} str
 * @returns {Boolean|Object}
 */
const less2 = (str) => greaterThan1(str)
  || makeErrorMarker('Input is too small. Try to input 2 or more elements. For example: 1,2,4,4');

/**
 * validation rule: input does not contain a separator
 * @param {String} str
 * @param {String} sep
 * @returns {Boolean|Object}
 */
const doesntContain = (str, sep) => containedIn(str, sep)
  || makeErrorMarker('Could not find separator into the input.');

/**
 * validation rule: contains specific characters after split
 * @param {String} str
 * @returns {Boolean|Object}
 */
const containsSpecificChars = (str) => hasNotSpecificChars(str)
  || makeErrorMarker('Found specific chars. Check your input on correctness.');

/**
 * validation rule: not a number
 * @param {Number} num
 * @returns {Boolean|Object}
 */
const notANumber = (num) => isNumber(num)
  || makeErrorMarker('Some char into the input is not a number.');

/**
 * validation rule: not power of 2
 * @param {Number} num
 * @returns {Boolean|Object}
 */
const notPowerOf2 = (num) => isPowerOf2(num)
  || makeErrorMarker('Some number into the input not a power of 2.');

/**
 * validation rule: is zero
 * @param {Number} num
 * @returns {Boolean|Object}
 */
const isZero = (num) => isNotZero(num)
  || makeErrorMarker('Some number into the input is 0.');

/**
 * module api
 */
module.exports = [
  inputIsNotExists,
  less2,
  doesntContain,
  containsSpecificChars,
  notANumber,
  notPowerOf2,
  isZero,
];
