// DETECT PANGRAM
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048


/* A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */


// MY SOLUTION
function isPangram(string){
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  return alphabet.filter(e => string.toLowerCase().indexOf(e) === -1).length === 0 ? true : false;
}
