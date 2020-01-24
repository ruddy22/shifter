/**
 * @module interactive_mode.js
 * @author Petrov Alexey
 */

const readlineSync = require('readline-sync');
const { getKey }= require('./helpers');

/**
 * returns direction after user input
 * @returns {String}
 */
const getDirection = () => {
  const directions = {
    l: 'Left',
    r: 'Right',
  };

  const key = readlineSync.keyIn(
    'Which direction? Left[l] or Right[r]? ',
    { limit: 'lr' }
  );

  return getKey(directions)(key);
}

/**
 * module api
 */
module.exports = getDirection;
