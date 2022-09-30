// REMOVE DUPLICATE WORDS
// https://www.codewars.com/kata/5b39e3772ae7545f650000fc


/* Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta' */


// MY SOLUTION
function removeDuplicateWords (s) {
  return s.split(' ').filter((e, i, a) => a.indexOf(e) === i).join(' ');
}
