'use strict';

/**
 * @param {Number} n  - Number.
 * @description - Given a number N return the index value of the Fibonacci sequence, where the sequence is:
 */

function fibonacci(n){
  let a = 1, b = 0, temp;

  while (n >= 0){
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
}


module.exports = factorial;