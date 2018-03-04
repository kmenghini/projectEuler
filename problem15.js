// Lattice paths
// https://projecteuler.net/problem=15

// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

// How many such routes are there through a 20×20 grid?

//only move right and down
//start at 0,0 -> end at n,n

//if at n,n -> add 1 to counter
//exit iteration if > n across or down

function latticePaths(n) {
  let count = 0;
  var checkPath = function(row, col) {
    if (row === n && col === n) {
      count++;
      return;
    } else if (row > n || col > n) {
      return;
    } else {
      checkPath(++row, col);
      checkPath(--row, ++col);
    }
  }
  checkPath(0, 0);
  return count;
}

console.log(latticePaths(20))
