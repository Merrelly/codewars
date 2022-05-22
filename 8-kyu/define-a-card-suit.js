// DEFINE A CARD SUIT
// https://www.codewars.com/kata/5a360620f28b82a711000047

/* You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades' */


// MY SOLUTION
function defineSuit(card) {
  if(card.includes('♣') === true){
    return 'clubs';
  }else if(card.includes('♦') === true){
    return 'diamonds';
  }else if(card.includes('♥') === true){
    return 'hearts';
  }else if(card.includes('♠') === true){
    return 'spades';
  }
}
