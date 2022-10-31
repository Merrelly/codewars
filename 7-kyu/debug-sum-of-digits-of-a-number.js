// DEBUG SUM OF DIGITS OF A NUMBER
// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba


/* Debug function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14 */


// MY SOLUTION
function getSumOfDigits(integer) {
  let sum = 0;
  let digits = integer.toString().split("").map(e => +e);
  for(let i = 0; i < digits.length; i++) {
    sum += digits[i];
  }
  return sum;
}
