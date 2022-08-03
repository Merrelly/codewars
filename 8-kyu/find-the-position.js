// FIND THE POSITION!
// https://www.codewars.com/kata/5808e2006b65bff35500008f


/* When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1" */


// MY SOLUTION
function position(letter){
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return `Position of alphabet: ${alphabet.indexOf(letter.toLowerCase()) + 1}`;
}
