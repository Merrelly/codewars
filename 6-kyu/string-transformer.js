// STRING TRANSFORMER
// https://www.codewars.com/kata/5878520d52628a092f0002d0


/* Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.

Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:
"Example Input" ==> "iNPUT eXAMPLE"

You may assume the input only contain English alphabet and spaces. */


// MY SOLUTION
function stringTransformer(str) {
  let transformedString = "";
  for(let i = 0; i < str.length; i++){
    if(str[i] === str[i].toUpperCase()){
      transformedString += str[i].toLowerCase();
    }else if(str[i] === str[i].toLowerCase()){
      transformedString += str[i].toUpperCase();
    }
  }
  return transformedString.split(/\b/).reverse().join("");
}
