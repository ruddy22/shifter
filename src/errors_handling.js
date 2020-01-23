/**
 * @module errors_handling.js
 * @author Petrov Alexey
 */

/**
 * shows error text and abort program
 * @param {String} errorText
 * @returns {Void}
 */
const showErrorAndAbortProgram = (errorText) => {
  // TODO: make error codes
  console.error(errorText);
  process.exit(1);
};

/**
 * module api
 */
module.exports = showErrorAndAbortProgram;
