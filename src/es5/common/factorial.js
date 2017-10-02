'use strict';

/**
 * @param {Number} n  - Number.
 * @description - Factorial is the product of an integer n, with it's each descendant value till 1
 */

function factorial(n) {
  return n === 1 ? n :n * factorial(n - 1);
}

module.exports = factorial;