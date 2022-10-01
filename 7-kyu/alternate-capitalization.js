// ALTERNATE CAPITALIZATION
// https://www.codewars.com/kata/59cfc000aeb2844d16000075


/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces. */


// MY SOLUTION
function capitalize(s){
  let string1 = s.split('').map((e, i) => i % 2 === 0 ? e.toUpperCase() : e).join('');
  let string2 = s.split('').map((e, i) => i % 2 !== 0 ? e.toUpperCase() : e).join('');
  return [string1, string2];
};
