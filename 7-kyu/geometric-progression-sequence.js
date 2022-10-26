// GEOMETRIC PROGRESSION SEQUENCE
// https://www.codewars.com/kata/55caef80d691f65cb6000040


/* In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.

Result should be separated by comma and space.

Example
geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162' */


// MY SOLUTION
function geometricSequenceElements(a, r, n){
  let array = [a];
  while(array.length < n){
    array.push(a * r);
    a = a * r;
  }
  return array.join(", ");
}
