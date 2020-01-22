/**
 * @module predicates.js
 * @author Petrov Alexey
 */

const helpers = require('./helpers');

/**
 * compare array length with 1
 * @param {Any[]} arr
 * @returns {Boolean}
 */
const greaterThan1 = (arr) => helpers.getLength(arr) > 1;

/**
 * checks entry into an array
 * @param {Any[]} arr
 * @param {Number|String|Boolean|Null} val
 * @returns {Boolean}
 */
const containedIn = (arr, val) => arr.includes(val);

/**
 * checks if a number is a power of 2
 * Note:
 * 0 was excluded, because it is auxiliary number
 * @param {Number} num
 * @returns {Boolean}
 */
const isPowerOf2 = (num) => (num !== 0) && ((num & (num - 1)) === 0);


/**
 * checks if a value is a number
 * @param {Any} num
 * @returns {Boolean}
 */
const isNumber = (val) => Number.isInteger(val);


/**
 * checks values for equality
 * @param {Any} a
 * @param {Any} b
 * @returns {Boolean}
 */
const isEqual = (a, b) => a === b;

/**
 * checks value that it is not a zero
 * @param {Number|String} val
 * @returns {Boolean}
 */
const isNotZero = (val) => val !== 0 && val !== '0';

/**
 * module api
 */
module.exports = {
  greaterThan1,
  containedIn,
  isPowerOf2,
  isNumber,
  isEqual,
  isNotZero,
};
