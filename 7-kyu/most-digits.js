// MOST DIGITS
// https://www.codewars.com/kata/58daa7617332e59593000006


/* Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array. */


// MY SOLUTION
function findLongest(array){
  let mostDigits = "";
  for(let i = 0; i < array.length; i++){
    if(array[i].toString().length > mostDigits.length){
      mostDigits = array[i].toString();
    }
  }
  return Number(mostDigits);
}
