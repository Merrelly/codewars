// DIVIDE AND CONQUER
// https://www.codewars.com/kata/57eaec5608fed543d6000021


/* Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Return as a number. */


// MY SOLUTION
function divCon(x){
  let nonStringIntegers = x.filter(e => typeof e === "number").reduce((acc, c) => acc + c, 0);
  let stringIntegers = x.filter(e => typeof e === "string").map(e => +e).reduce((acc, c) => acc + c, 0);
  return nonStringIntegers - stringIntegers;
}
