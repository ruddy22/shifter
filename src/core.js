/**
 * @module core.js
 * @author Petrov Alexey
 */

// deps
const helpers = require('./helpers');
const predicates = require('./predicates');

// constants
const STEP = 1;
const ZERO = 0;

// logic
/**
 * reduses array
 * @param {Number[]} arr
 * @returns {Object}
 */
const reduceArray = (arr) =>
  arr.reduce(({acc, sumsCount}, curr) => {
    const lastItem = helpers.getLast(acc);
    const isEql = predicates.isEqual(lastItem, curr);
    const notAZero = [lastItem, curr].every(predicates.isNotZero);

    if (isEql && notAZero) {
      helpers.setLast(acc, helpers.add(lastItem, curr));
      sumsCount += 1;
    } else {
      acc.push(curr);
    }

    return { acc, sumsCount } ;
  }, { acc: [], sumsCount: ZERO });

/**
 * checks elements in the neighborhood with a STEP distance
 * @param {Number} step
 * @param {Number[]} arr
 * @returns {Boolean}
 */
const checkNearestPositions = (step) => (arr) => {
  let flag = false;

  const num = arr[ZERO];
  const left = helpers.add(num, step);
  const right = helpers.add(num, (-1 * step));
  const range = [left, right];
  const l = helpers.getLength(arr);

  for (let i = 1; i < l; i+=1) {
    if (predicates.containedIn(range, arr[i])) {
      flag = true;
      break;
    }
  }

  return flag;
};

/**
 * fills the dictionary
 * @param {Number[]} arr
 * @param {Object} dict
 * @returns {Object}
 */
const fillDict = (arr) => (dict) => {
  arr.forEach((el, pos) => {
    if (dict[el]) {
      dict[el].push(pos);
    } else {
      dict[el] = [pos];
    }
  });

  return dict;
};

/**
 * iterates over the properties of dictionary
 * and detects neighboring elements
 * @param {Object} dict
 * @returns {Boolean[]}
 */
const checksDictForDups = (dict) =>
  Object.keys(dict)
    .filter(predicates.isNotZero)
    .map(helpers.getKey(dict))
    .filter(predicates.greaterThan1)
    .map(checkNearestPositions(STEP))
    .filter(Boolean); // filter falsy values

/**
 * checks the array for the possibility of "shift"
 * @param {Number[]} arr
 * @returns {Boolean}
 */
const checkShiftPossibility = (arr) => {
  const fn = helpers.compose(fillDict(arr), checksDictForDups);
  const res = fn({});
  return Boolean(res.length);
};

/**
 * possible shift directions and their handlers
 */
const directionHandlers = {
  left: arr => arr.push.bind(arr, 0),
  right: arr => arr.unshift.bind(arr, 0)
};

/**
 * returns handler for direction
 * @param {String} direction
 * @returns {Function}
 */
const getDirectionHandler = direction =>
  helpers.getKey(directionHandlers)(direction);

/**
 * calls income function n times
 * @param {Number} n - count of reps
 * @param {Function} fn
 * @returns {Void}
 */
const repeat = (n, fn) => {
  for (let i = 0; i < n; i+=1) {
    fn();
  }
};

/**
 * puts zeros into array
 * @param {Number} arr
 * @param {String} direction
 * @param {Number} zeroCount
 * @returns {Void}
 */
const addZeros = (arr, direction, zerosCount) =>
  repeat(zerosCount, getDirectionHandler(direction)(arr));

/**
 * module api
 */
module.exports = {
  checkShiftPossibility,
  reduceArray,
  fillDict,
  checksDictForDups,
  checkNearestPositions,
  addZeros,
  repeat,
};
