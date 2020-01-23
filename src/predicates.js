/**
 * @module predicates.js
 * @author Petrov Alexey
 */

const helpers = require('./helpers');
const specificCharsRegex = /\/|"|\[|\]|\||\:|\<|\>|\+|\=|\;|\,|\?|\*|\@|\%2F|\%22|\%5B|\%5D|\%3A|\%7C|\%3C|\%3E|\%2B|\%3D|\%3B|\%2C|\%3F|\%40|\\u002F|\\u0022|\\u005B|\\u005D|\\u003A|\\u007C|\\u003C|\\u003E|\\u002B|\\u003D|\\u003B|\\u002C|\\u003F|\\u002A|\\u0040/gim;

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
 * checks existence
 * @param {String} str
 * @returns {Boolean}
 */
const inputExists = str => str !== '' && str !== null && str !== undefined;

/**
 * checks string for specific chars
 * @param {String} str
 * @returns {Boolean}
 */
const hasNotSpecificChars = str => !specificCharsRegex.test(str);

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
  inputExists,
  hasNotSpecificChars,
};
