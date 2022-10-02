// IS THERE A VOWEL IN THERE?
// https://www.codewars.com/kata/57cff961eca260b71900008f


/* Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array. */


// MY SOLUTION
function isVow(a){
  const characterCodes = {
     97 : "a",
    101 : "e",
    105 : "i",
    111 : "o",
    117 : "u",
  }
  return a.map(e => e in characterCodes ? characterCodes[e] : e);
}
