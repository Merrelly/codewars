// SHORTEST WORD
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9


/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */


// MY SOLUTION
function findShort(s){
  let array = s.split(' ');
  let shortestWord = array[0].length;
  for(let i = 0; i < array.length; i++){
    if(array[i].length < shortestWord){
      shortestWord = array[i].length;
    }
  }
  return shortestWord;
}
