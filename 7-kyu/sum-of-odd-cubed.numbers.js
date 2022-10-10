// SUM OF ODD CUBED NUMBERS
// https://www.codewars.com/kata/580dda86c40fa6c45f00028a


// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.


// MY SOLUTION
function cubeOdd(arr) {
  return arr.every(e => typeof e === "number") ? arr.filter(e => e % 2 !== 0).map(e => e ** 3).reduce((acc, c) => acc + c, 0) : undefined;
}
