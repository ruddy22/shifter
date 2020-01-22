/**
 * @module predicates.test.js
 * @author Alexey Petrov
 */

const { isPowerOf2 } = require('../predicates');

describe("isPowerOf2 test suite", () => {
  test("success for 4", () => {
    expect(isPowerOf2(2)).toBe(true);
  });
  test("success for 2", () => {
    expect(isPowerOf2(2)).toBe(true);
  });
  test("success for 1", () => {
    expect(isPowerOf2(1)).toBe(true);
  });
  test("failure for 0", () => {
    expect(isPowerOf2(0)).toBe(false);
  });
  test("failure for 3", () => {
    expect(isPowerOf2(3)).toBe(false);
  });
});
