// FIND NEAREST SQUARE NUMBER
// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba


// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.


// MY SOLUTION
function nearestSq(n){
    let squareRoot = Math.round(Math.sqrt(n));
    return Math.pow(squareRoot, 2);
}
