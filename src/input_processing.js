/**
 * @module input_processing.js
 * @author Petrov Alexey
 */

const handleError = require('./errors_handling');

/**
 * process user input
 * @param {String} incomeStr
 * @param {String} sep
 * @param {Function[]} validationRules
 * @returns {Number[]}
 */
const processInput = (incomeStr, sep, validationRules) => {
  const rulesForIncomeString = validationRules.slice(0, 3);

  for (let k = 0; k < rulesForIncomeString.length; k += 1) {
    const validationRule = rulesForIncomeString[k];
    const res = validationRule(incomeStr, sep);
    if (res.invalid) {
      handleError(res.errorText);
    }
  }

  const arr = incomeStr.split(sep);

  const containsSpecificSymbolsCheck = validationRules.slice(3, 4)[0];
  const result = containsSpecificSymbolsCheck(arr.join(''));
  if (result.invalid) {
    handleError(result.errroText);
  }

  const otherValidationRules = validationRules.slice(4);
  const nums = arr.map(val => parseInt(val, 10));
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < otherValidationRules.length; j += 1) {
      const validationRuleFn = otherValidationRules[j];
      const res = validationRuleFn(nums[i]);
      if (res.invalid) {
        handleError(result.errroText);
      }
    }
  }

  return nums;
}

/**
 * module api
 */
module.exports = processInput;
