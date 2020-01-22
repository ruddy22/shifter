/**
 * @module core.test.js
 * @author Petrov Alexey
 */

const {
  checkShiftPossibility,
  reduceArray,
  fillDict,
  checksDictForDups,
  checkNearestPositions
} = require('../core');

describe('core test suite', () => {
    describe('checkShiftPossibility', () => {
        test('shift is possible', () => {
            expect(checkShiftPossibility([1,2,4,4,4])).toBe(true);
        });
        test('shift is not possible', () => {
            expect(checkShiftPossibility([1,2,4])).toBe(false);
        });
    });
    describe('reduceArray', () => {
        test('array was reduced and sumsCount not equals 0', () => {
            const arr = [1,2,4,4,4];
            const res = reduceArray(arr);
            expect(res.acc.length).toBe(arr.length - 1);
            expect(res.sumsCount).not.toBe(0);
            expect(res.sumsCount).toBe(1);
        });
        test('array was not reduced and sumsCount equals 0', () => {
            const arr = [1,2,4];
            const res = reduceArray(arr);
            expect(res.acc.length).toBe(arr.length);
            expect(res.sumsCount).toBe(0);
        });
    });
    describe('fillDict', () => {
        let dict = null;
        const arr1 = [1,2,4,16];
        const arr2 = [1,2,4,16,16];

        beforeEach(() => {
           dict = {};
        });

        afterEach(() => {
           dict = null;
        });

        test('correct filling with unique fields', () => {
            const res = fillDict(arr1)(dict);
            expect(res).toEqual({
                1: [0],
                2: [1],
                4: [2],
                16: [3]
            });
        });
        test('correct filling with unique fields and duplicated values', () => {
            const res = fillDict(arr2)(dict);
            expect(res).toEqual({
                1: [0],
                2: [1],
                4: [2],
                16: [3, 4]
            });
        });
        test('empty dict', () => {
            const res = fillDict([])(dict);
            expect(res).toEqual({});
        });
    });
    describe('checksDictForDups', () => {
        test('neighbors(duplicate values) were found', () => {
            const dict = {
                1: [0],
                2: [1],
                4: [2],
                16: [3, 4]
            };
            const res = checksDictForDups(dict);
            expect(Boolean(res.length)).toBe(true);
            expect(res.length).toBe(1);
        });
        test('neighbors(duplicate values) were not found', () => {
            const dict = {
                1: [0],
                2: [1],
                4: [2],
                16: [4]
            };
            const res = checksDictForDups(dict);
            expect(Boolean(res.length)).toBe(false);
            expect(res.length).toBe(0);
        });
        test('duplicate values were found, but they are not a neighbors', () => {
            const dict = {
                1: [0],
                2: [1],
                4: [2, 4],
                16: [3, 5]
            };
            const res = checksDictForDups(dict);
            expect(Boolean(res.length)).toBe(false);
            expect(res.length).toBe(0);
        });
    });
    describe('checkNearestPositions', () => {
        const step = 1;
        test('nearest positions were found', () => {
            const fn = checkNearestPositions(step);
            expect(fn([3, 4])).toBe(true);
            expect(fn([3, 6, 4])).toBe(true);
            expect(fn([3, 6, 4, 7])).toBe(true);
        });
        test('nearest positions were not found', () => {
            const fn = checkNearestPositions(step);
            expect(fn([3])).toBe(false);
            expect(fn([3, 6, 8])).toBe(false);
            expect(fn([3, 6, 41, 8])).toBe(false);
        });
    });
});
