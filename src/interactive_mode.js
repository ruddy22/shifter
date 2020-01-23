/**
 * @module interactive_mode.js
 * @author Petrov Alexey
 */

const readlineSync = require('readline-sync');
const { reduceArray, checkShiftPossibility, addZeros }= require('./core');

/**
 * @returns {String}
 */
const getDirection = () => {
  const directions = ['left', 'right'];
  const index = readlineSync.keyInSelect(directions, 'Which direction?');

  return directions[index];
}

/**
 * @param {Boolean} useZeros
 * @param {Number[]} arr
 * @returns {Object}
 */
const interactiveModeFn = (useZeros, arr) => {
  const directionsSeq = [];
  let rs = { acc: arr };
  let res = checkShiftPossibility(rs.acc);
  let index = 1;

  while (res !== false) {
    console.log(rs.acc);
    const direction = getDirection();
    rs = reduceArray(rs.acc);
    res = checkShiftPossibility(rs.acc);
    directionsSeq.push(direction);

    if (useZeros && rs.sumsCount) {
      addZeros(rs.acc, direction, rs.sumsCount);
    }

    index += 1;
  }

  return {
    before: arr,
    after: rs.acc,
    directions: directionsSeq,
    iterationCount: index
  }
};

/**
 * module api
 */
module.exports = interactiveModeFn;
