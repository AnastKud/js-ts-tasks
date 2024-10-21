/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers() {
  function isPrime(n) {
    for (let i = 2; i <= n / 2; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  return function (start, end) {
    const prim = [];

    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        prim.push(i);
      }
    }
    return prim;
  };
};
