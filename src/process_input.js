/**
 * @module process_input.js
 * @author Petrov Alexey
 */

/**
 * process user input
 * @param {String} incomeStr
 * @returns {Number[]}
 */
const processInput = (incomeStr, sep, validationRules) => {
  const arr = incomeStr.split(sep);
  const checkArrayLengthFn = validationRules[0];
  const otherValidationRules = validationRules.slice(1);

  if (!checkArrayLengthFn(arr)) {
    // abortAndShowError();
    console.error('Array is too small. Try to input 2 or more elements. For example: 1,2,4,4');
    process.exit(1);
  }

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < otherValidationRules.length; j += 1) {
      const validationRuleFn = otherValidationRules[j];
      const res = validationRuleFn(arr[i]);
      if (!res.valid) {
        // abortAndShowError();
        console.error(res.error);
        process.exit(1);
      }
    }
  }

  return arr;
}
