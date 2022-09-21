// CONVERT TO BINARY
// https://www.codewars.com/kata/59fca81a5712f9fa4700159a


/* Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

Example:

toBinary(1)  should return 1
toBinary(5)  should return 101
toBinary(11) should return 1011 */


// MY SOLUTION
function toBinary(n){
  return Number(n.toString(2));
}
