/**
 * Write a function called solution that
 *   takes in 2 parameters, a number and a function,
 *   and returns a function.
 * When the returned function is called,
 *   it will return whatever the input function returns
 * When the returned function is called input number of times,
 *   it will return null
 * @param {number} a
 * @param {function} fun
 * @returns {function}
 */

 const fun = () => {
   return null;
 }

const solution = (a, b) => {
  //It is creating a function called return
  //And returning a function within the body of return
  return () => {
    if (a <= 0) {
      return null;
    }
    a = a - 1;
    return b();
  };
};
