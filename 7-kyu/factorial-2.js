// FACTORIAL
// https://www.codewars.com/kata/57a049e253ba33ac5e000212


/* Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial */


// MY SOLUTION
function factorial(n){
  let total = 1;
  for(let i = 1; i <= n; i++){
    total *= i;
  }
  return total;
}
