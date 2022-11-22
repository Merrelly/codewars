// SIMPLE REMOVE DUPLICATES
// https://www.codewars.com/kata/5ba38ba180824a86850000f7


/* Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3

Expected output: [4, 6, 3] */


// MY SOLUTION
function solve(arr) {
  let filteredArray = [];
  for(let i = arr.length - 1; i >= 0; i--){
    if(filteredArray.indexOf(arr[i]) === -1){
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray.reverse();
}
