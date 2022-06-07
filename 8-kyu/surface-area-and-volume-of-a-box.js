// SURFACE AREA AND VOLUME OF A BOX
// https://www.codewars.com/kata/565f5825379664a26b00007c


// Write a function that returns the total surface area and volume of a box as an array: [area, volume]


// MY SOLUTION
function getSize(width, height, depth){
  let array = [];
  array.push(2*(depth*width) + 2*(depth*height) + 2*(width*height));
  array.push(width * height * depth);
  return array;
};
