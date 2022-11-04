// VOWEL ONE
// https://www.codewars.com/kata/580751a40b5a777a200000a1


/* Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100" */


// MY SOLUTION
function vowelOne(s){
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return s.split("").map(e => vowels.indexOf(e) !== -1 ? e = 1 : e = 0).join("");
}
