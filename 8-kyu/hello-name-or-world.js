// HELLO, NAME OR WORLD!
// https://www.codewars.com/kata/57e3f79c9cb119374600046b


/* Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:
* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!" */


// MY SOLUTION
function hello(name) {
  if(typeof name !== 'undefined' && name.length > 0){
    return `Hello, ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`;
  }else{
    return 'Hello, World!';
  }
}
