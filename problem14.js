// Longest Collatz sequence
// https://projecteuler.net/problem=14

// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

function collatzSequenceChainLength(n, count) {
  var count = count || 0;
  if (n === 1) {
    return ++count;
  } else if (n % 2 === 0) {
    return collatzSequenceChainLength(n / 2, ++count)
  } else {
    return collatzSequenceChainLength(3 * n + 1, ++count)
  }
}

function longestCollatzChain(n) {
  var resultStartingNum = null;
  var longestChainLength = 0;
  while (n > 0) {
    var length = collatzSequenceChainLength(n);
    if (length > longestChainLength) {
      resultStartingNum = n;
      longestChainLength = length;
    }
    n--;
  }
  return resultStartingNum;
}

console.log(longestCollatzChain(1000000));