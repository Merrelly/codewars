// CHANGING LETTERS
// https://www.codewars.com/kata/5831c204a31721e2ae000294


/* When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata. */


// MY SOLUTION
function swap (string) {
  const vowels = ["a", "e", "i", "o", "u"];
  return string.split("").map(e => vowels.indexOf(e) !== -1 ? e.toUpperCase() : e).join("");
}
