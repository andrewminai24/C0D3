/**
 * Write a function called solution that
 * Takes in 2 numbers, return true if their sum is greater than 10,
 *   false otherwise
 * @param {number} a
 * @param {number} b
 * @returns {boolean}
 */

const solution = (a, b) => {
  if (a + b > 10) {
    return true;
  } else {
    return false;
  }
};
module.exports = {
  solution
};
