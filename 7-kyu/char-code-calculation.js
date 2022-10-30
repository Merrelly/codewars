// CHAR CODE CALCULATION
// https://www.codewars.com/kata/57f75cc397d62fc93d000059


/* Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6 */


// MY SOLUTION
function calc(x){
  const total1 = x.split("").map(e => e.charCodeAt()).join("");
  const total2 = total1.toString().split("").map(e => +e === 7 ? e = 1 : e).join("");
  const total1Sum = total1.split("").map(e => +e).reduce((acc, c) => acc + c, 0);
  const total2Sum = total2.split("").map(e => +e).reduce((acc, c) => acc + c, 0);
  return total1Sum - total2Sum;
}
