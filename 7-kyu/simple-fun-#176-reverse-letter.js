// SIMPLE FUN #176: REVERSE LETTER
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b


/* Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.
[output] a string */


// MY SOLUTION
function reverseLetter(str) {
  return str.replace(/[^a-z]/ig, "").split("").reverse().join("");  
}
