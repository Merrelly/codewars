/* Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck! */

function doubleChar(str) {
    let array = str.split('');
    let repeatedArray = [];
    array.forEach((element) => {
      repeatedArray.push(element, element);
    });
    return repeatedArray.toString('').replace(/,/g, '');
  };
