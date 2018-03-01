// Summation of primes
// https://projecteuler.net/problem=10

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

function sumOfPrimes(n) {
  var result = 0;
  for (var i = 2; i < n; i++) {
    if (isPrime(i)) {
      result += i;
    }
  }
  return result;
}

function isPrime(n) {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(sumOfPrimes(2000000))
