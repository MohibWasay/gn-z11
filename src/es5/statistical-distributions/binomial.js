'use strict';

import * as factorial from './common/factorial';

/**
 * @constructor
 * @param {Number} theta   - Probability of an event.
 * @param {Number} number  - Number of events
 * @param {Number} x       - Number of times
 *
 * @description - The Bernoulli distribution is a discrete probability distribution in which the
 * random variable can take only two possible values 0 or 1, where 1 is assigned in case of success
 * or occurrence (of the desired event) and 0 on failure or non-occurrence
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