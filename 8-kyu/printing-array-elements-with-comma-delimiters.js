// PRINTING ARRAY ELEMENTS WITH COMMA DELIMITERS
// https://www.codewars.com/kata/56e2f59fb2ed128081001328


/* Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a" */


// MY SOLUTION
function printArray(array){
  let string = '';
  for(let i = 0; i < array.length; i++){
    if(i !== array.length - 1){
      string += array[i] + ',';
    }else{
      string += array[i];
    }
  }
  return string;
}
