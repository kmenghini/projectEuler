// Special Pythagorean triplet
// https://projecteuler.net/problem=9

// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function pythagoreanTripletSum(n) {
  for (var i = 1; i < n; i++) {
    for (var j = 1; j < n; j++) {
      for (var k = 1; k < n; k++ ) {
        if (isPythagoreanTriplet(i, j, k)) {
          if (i + j + k === n) {
            return i * j * k;
          }
        }
      }
    }
  }
}

function isPythagoreanTriplet(a, b, c) {
  return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
}

console.log(pythagoreanTripletSum(1000));

