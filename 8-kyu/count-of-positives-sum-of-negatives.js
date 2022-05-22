// COUNT OF POSITIVES, SUM OF NEGATIVES
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// MY SOLUTION
function countPositivesSumNegatives(input) {
  if(input === null || input.length === 0){
    return new Array(0);
  }else{
    const positiveTotal = input.filter(e => e > 0).length;
    const negativeTotal = input.filter(e => e < 0).reduce((acc, c) => acc + c, 0);
    return new Array(positiveTotal, negativeTotal);
  }
}
