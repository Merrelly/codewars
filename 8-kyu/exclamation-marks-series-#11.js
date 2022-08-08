// EXCLAMATION MARKS SERIES #11: REPLACE ALL VOWEL TO EXCLAMATIONS MARK IN THE SENTENCE
// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed


/* Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!" */


// MY SOLUTION
function replace(s){
  return s.replace(/[aeiou]/ig, '!');  
}
