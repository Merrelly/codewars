// HALVING SUM
// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d


/* Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47 */


// MY SOLUTION
function halvingSum(n) {
  let sum = n;
  let divisor = 2;
  while(n / divisor > 0){
    sum += Math.floor(n / divisor);
    divisor = divisor * 2;
  }
  return sum;
}
