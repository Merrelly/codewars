// SUM OF CUBES
// https://www.codewars.com/kata/59a8570b570190d313000037


/* Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27) */


// MY SOLUTION
function sumCubes(n){
  let sum = 0;
  for(let i = 1; i <= n; i++){
    sum += i ** 3;
  }
  return sum;
}
