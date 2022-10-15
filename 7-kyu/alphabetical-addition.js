// ALPHABETICAL ADDITION
// https://www.codewars.com/kata/5d50e3914861a500121e1958


/* Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'

Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z' */


// MY SOLUTION
function addLetters(...letters) {
  let sum = letters.map(e => e.charCodeAt() - 96).reduce((acc, c) => acc + c, 0);
  if(letters.length === 0){
    return "z";
  }else if(sum <= 26){
    return String.fromCharCode(sum + 96);
  }else if(sum % 26 !== 0){
    return String.fromCharCode((sum % 26) + 96);
  }else{
    return String.fromCharCode((sum % 26) + 26 + 96);
  }
}
