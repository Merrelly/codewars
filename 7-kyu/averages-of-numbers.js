// AVERAGES OF NUMBERS
// https://www.codewars.com/kata/57d2807295497e652b000139


/* #Get the averages of these numbers

Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

Example:

Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]

If the array has 0 or 1 values or is null, your method should return an empty array. */


// MY SOLUTION
function averages(numbers) {
  let array = [];
  if(numbers === null || numbers.length <= 1){
    return array;
  }else{
    for(let i = 1; i < numbers.length; i++){
      array.push((numbers[i - 1] + numbers[i]) / 2);
    }
  } 
  return array;
}
