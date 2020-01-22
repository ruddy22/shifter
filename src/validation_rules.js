/**
 * @module validation_rules.js
 * @author Petrov Alexey
 */

// TODO: move to predicates.js
// 0. imput exists
const imputExists = str => str !== '' && str !== null && str !== undefined
// 1. array length check (2 or more elements)
const correctLength = arr => arr.length >= 2;
// 2. all are numbers
// 3. all are power of 2
// 4. no specific symbols ({}()[]/\!$#%^&*``''""§)
