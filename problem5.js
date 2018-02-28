// Smallest multiple
// https://projecteuler.net/problem=5

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallestMultiple() {
  var acc = false;
  var n = 2520;
  while (!acc) {
    isDivisibleToY(n, 20) ? acc = true : n++
  }
  return n;
}

function isDivisibleToY(x, y) {
  var acc = true;
  for (var i = 1; i <= y; i++) {
    acc = acc && (x % i === 0);
  }
  return acc;
}

console.log(smallestMultiple())