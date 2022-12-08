// COUNT CHARACTERS IN YOUR STRING
// https://www.codewars.com/kata/52efefcbcdf57161d4000091


/* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}. */


// MY SOLUTION
function count (string) {  
  let count = {};
  for(const element of string){
    if(count[element]){
      count[element] += 1;
    }else{
      count[element] = 1;
    }      
  }
  return count;
}
