'use strict';

/**
 * @constructor
 * @param {Number} theta  - Cost of probability.
 * @param {Boolean} direction  - direction of probability (i.e. true: success, false: failure)
 *
 * @description - The Bernoulli distribution is a discrete probability distribution in which the
 * random variable can take only two possible values 0 or 1, where 1 is assigned in case of success
 * or occurrence (of the desired event) and 0 on failure or non-occurrence
 */

function Bernoulli(theta, direction) {
  this.theta = theta;
  this.direction = direction;
}

Bernoulli.prototype.getMean = function() {
  return this.direction ? this.theta : 1 - this.theta;
}

Bernoulli.prototype.getVariance = function() {
  return Math.sqrt(this.getMean());
}

Bernoulli.prototype.getProbabilityGenFn = function(time) {
  let theta = this.getMean();
  return theta * time + theta;
}

Bernoulli.prototype.getMomentGenFn = function(time) {
  let theta = this.getMean();
  return (theta * Math.pow(Math.E, time)) + (1 - theta);
}

Bernoulli.prototype.getCumulativeGenFn = function(time) {
  return Math.log((theta *Math.pow(Math.E, time)) + (1 - theta));
}

module.exports = Bernoulli;