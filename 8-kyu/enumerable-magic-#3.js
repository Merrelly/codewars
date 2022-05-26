// ENNUMERABLE MAGIC #3 - DOES MY LIST INCLUDE THIS?
// https://www.codewars.com/kata/545991b4cbae2a5fda000158


// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.


// MY ORIGINAL SOLUTION
function include(arr, item){
  if(arr.includes(item) === true){
    return true;
  }else{
    return false;
  };
};

// MY REFACTORED SOLUTION
function include(arr, item){
  return arr.includes(item);
};
