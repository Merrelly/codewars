// SORTED? YES? NO? HOW?
// https://www.codewars.com/kata/580a4734d6df748060000045


/* Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer. */


// MY SOLUTION
function isSortedAndHow(array) {
  if([...array].sort((a, b) => a - b).join() !== array.join() && [...array].sort((a, b) => b - a).join() !== array.join()){
    return "no";
  }else if([...array].sort((a, b) => a - b).join() === array.join()){
    return "yes, ascending";
  }else if([...array].sort((a, b) => b - a).join() === array.join()){
    return "yes, descending";
  }
}
