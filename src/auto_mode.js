/**
 * @module auto_mode.js
 * @author Petrov Alexey
 */

/**
 * returns direction randomly
 * @returns {String}
 */
const getDirectionRandomly = () => Math.random() > 0.5 ? 'right' : 'left';

/**
 * module api
 */
module.exports = getDirectionRandomly;
