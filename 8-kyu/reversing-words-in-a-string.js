// REVERSING WORDS IN A STRING
// https://www.codewars.com/kata/57a55c8b72292d057b000594


/* You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
Happy coding! */


// MY SOLUTION
const reverse = string => string.split(' ').reverse().join(' ');
