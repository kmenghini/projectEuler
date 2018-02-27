// Largest palindrome product
// https://projecteuler.net/problem=4

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function largestPalindrome() {
  for (var i = 998001; i >= 10000; i--) {
    if (isPalindrome(i)) {
      if (isProductOf3DigitNumbers(i)) {
        return i;
      }
    }
  }
}

function isPalindrome(n) {
  var string = n.toString();
  for (var i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function isProductOf3DigitNumbers(n) {
  for (var i = 999; i >= 100; i--) {
    if (n % i === 0) {
      if (i.toString().length === 3 && (n / i).toString().length === 3) {
        return true;
      }
    }
  }
  return false;
}


console.log(largestPalindrome());
