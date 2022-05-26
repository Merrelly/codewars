// FAKE BINARY
// https://www.codewars.com/kata/57eae65a4321032ce000002d


/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string */


// MY SOLUTION
function fakeBin(x){
  const array = x.split('');
  const binaryArray = [];
  array.forEach(e => {
    if(e < 5){
      binaryArray.push(0);
    }else{
      binaryArray.push(1);
    }
  })
  return binaryArray.join('');
}
