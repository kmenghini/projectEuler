// 10001st prime
// https://projecteuler.net/problem=7

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10001st prime number?

function nthPrime(n) {
  var counter = 0;
  var number = 2;
  while (counter < n) {
    if (isPrime(number)) {
      counter++;
    }
    number++;
  }
  return number - 1;
}

function isPrime(n) {
  for (var i = n - 1; i > 1; i--) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(nthPrime(10001));





