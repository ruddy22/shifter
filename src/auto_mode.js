/**
 * @module auto_mode.js
 * @author Petrov Alexey
 */

const { reduceArray, checkShiftPossibility, addZeros }= require('./core');

/**
 * @returns {String}
 */
const getDirectionRandomly = () => Math.random() > 0.5 ? 'right' : 'left';

/**
 * @param {Boolean} useZeros
 * @param {Number[]} arr
 * @returns {Object}
 */
const autoModeFn = (useZeros, arr) => {
  const directionsSeq = [];
  let rs = { acc: arr };
  let res = checkShiftPossibility(rs.acc);
  let index = 1;

  while (res !== false) {
    rs = reduceArray(rs.acc);
    res = checkShiftPossibility(rs.acc);
    const direction = getDirectionRandomly();
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
module.exports = autoModeFn;
