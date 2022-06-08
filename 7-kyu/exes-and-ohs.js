// EXES AND OHS
// https://www.codewars.com/kata/55908aad6620c066bc00002a


/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */


// MY SOLUTION
function XO(str) {
  let xCount = 0;
  let oCount = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] === 'X' || str[i] === 'x'){
      xCount += 1;  
    }else if(str[i] === 'O' || str[i] === 'o'){
      oCount += 1;
    }
  }
  if(xCount === oCount){
    return true;
  }else{
    return false;
  }
}
