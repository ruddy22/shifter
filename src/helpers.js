/**
 * @module helpers.js
 * @author Petrov Alexey
 */

/**
 * returns array length
 * @param {Any[]} arr
 * @returns {Number}
 */
const getLength = (arr) => arr.length;

/**
 * returns specific key of dict
 * @param {Object} dict
 * @param {String} key
 * @returns {Any}
 */
const getKey = (dict) => (key) => dict[key];

/**
 * functions composer
 * make chain from function calls
 * @param {Function[]} fns
 * @param {Any} arg
 * @returns {Any}
 */
const compose = (...fns) => (arg) => fns.reduce((composed, f) => f(composed), arg);

/**
 * returns last element of array
 * @param {Any[]} arr
 * @returns {Any}
 */
const getLast = (arr) => {
  const idx = getLength(arr) - 1;
  return idx >= 0 ? arr[idx] : 0;
};

/**
 * sets last element for array
 * @param {Any[]} arr
 * @param {Any} val
 * @returns {Void}
 */
const setLast = (arr, val) => {
  arr.pop();
  arr.push(val);
};

/**
 * calc sum of two values
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const add = (a, b) => a + b;

/**
 * module api
 */
module.exports = {
  add,
  getLast,
  setLast,
  compose,
  getKey,
  getLength,
};
