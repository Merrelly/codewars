// SWITCHEROO
// https://www.codewars.com/kata/57f759bb664021a30300007d


/* Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb' */


// MY SOLUTION
function switcheroo(x){
  let array = [];
  for(let i = 0; i < x.length; i++){
    if(x[i] === "a"){
      array.push("b");
    }else if(x[i] === "b"){
      array.push("a");
    }else{
      array.push(x[i]);
    }
  }
  return array.join("");
}
