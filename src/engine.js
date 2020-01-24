/**
 * @module engine.js
 * @author Petrov Alexey
 */

const { reduceArray, checkShiftPossibility, addZeros }= require('./core');

/**
 * make calculations with array
 * @param {Function} getDirection
 * @param {Boolean} useZeros
 * @param {Number[]} arr
 * @returns {Object}
 */
const doWork = (getDirection, useZeros, arr) => {
  const directionsSeq = [];
  let rs = { acc: arr };
  let res = checkShiftPossibility(rs.acc);
  let index = 1;

  while (res !== false) {
    console.log(rs.acc);

    const direction = getDirection();
    directionsSeq.push(direction);

    rs = reduceArray(rs.acc);
    res = checkShiftPossibility(rs.acc);

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
module.exports = doWork;
