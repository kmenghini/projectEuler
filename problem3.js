// Largest prime factor
// https://projecteuler.net/problem=3

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143?

function largestPrimeFactor(n) {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      var factor = n / i;
      if (isPrime(factor)) {
        return factor;
      }
    }
  }
}

function isPrime(n) {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(largestPrimeFactor(13195)) //29
console.log(largestPrimeFactor(600851475143)) 
