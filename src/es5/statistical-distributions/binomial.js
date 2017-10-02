'use strict';

import * as factorial from './common/factorial';

/**
 * @constructor
 * @param {Number} theta   - Probability of an event.
 * @param {Number} number  - Number of events
 * @param {Number} x       - Number of times
 *
 * @description - The binomial distribution function specifies the number of times (x)
 * that an event occurs in n independent trials where p is the probability of the event
 * occurring in a single trial
 */

function Binomial(theta, number, x) {
  this.theta = theta;
  this.number = number;
  this.x = x;
}

Binomial.prototype.getFunctionalForm = function() {
  let eventFactorial = factorial(this.number);
  let xFactorial = factorial(this.x);
  let diffFactorial = factorial(this.number - this.x);

  let denominator = xFactorial * diffFactorial;
  let numerator   = eventFactorial * Math.pow(this.theta, this.x);
  numerator = numerator * Math.pow(1 - this.theta, this.number - this.x);

  return numerator / denominator;
}

Binomial.prototype.getMean = function() {
  return this.number * this.theta;
}

Binomial.prototype.getVariance = function() {
  return Math.sqrt(this.number * this.theta * (1 - this.theta));
}

module.exports = Bernoulli;