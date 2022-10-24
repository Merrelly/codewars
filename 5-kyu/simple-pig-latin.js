// SIMPLE PIG LATIN
// https://www.codewars.com/kata/520b9d2ad5c005041100000f


/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */


// MY SOLUTION
function pigIt(str){
  return str.split(" ").map(e => /[a-z]/ig.test(e) ? e.slice(1) + e.slice(0, 1) + "ay" : e).join(" ");
}
