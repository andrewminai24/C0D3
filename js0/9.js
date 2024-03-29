/**
 * Write a function called solution that
 * Takes in 2 numbers and returns a function
 * The returned function
 *  takes in a number and returns the sum of all 3 numbers when called
 * @param {number} a
 * @param {number} b
 * @returns {function}
 */
const solution = (a, b) => {
  return c => {
    return a + b + c;
  };
};

module.exports = {
  solution
};
