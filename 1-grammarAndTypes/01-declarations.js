/* What is a variable? Variables are named containers for storing data values.
We name the variables so that we can refer to this data again.
*/


let a= 2;

let    b   =   1;
/*(1)  (2) (3) (4)

1- Keyword
2- Variable name
3- Assignment operator 
4- variable value 
*/

/*notes on variables:
//1)  A variable name must begin with a letter, underscore, or dollar sign
//2)  Numbers may follow the above characters, but cannot come first
//3)  JavaScript is case sensitive-- 'hello' and 'HeLlo' are different variables
//4)  variables must be identified with unique names
//5)  No spaces are allowed in variable names
//6)  camelCase is the best practice for naming variables. 
This is good practice because it helps keep variables readable--  var myName = 'Autumn'; 
*/

/* Declarations are the left side of the variable 
It is simply the Var x
It is on the left side of the assignment operator (=)

Initliazation are the RIGHT Side of a variable 
It sets the value of the variable 
It incorporates the variable name (x), the assigment operator (=), and the value (10) => x = 10
(=) assignment operator is NOT the same as the equal operator (== or ==)
*/

let x;
console.log('Declaration', x);

x=10;
console.log('Intializing 1:', x);

x = 33;
console.log('Initilizing 2:', x);

let y = 'Hello';
console.log('Both:', x, y);

let today = 'Great';
const elevenFifty = 'Wonderful';
console.log(today, elevenFifty);

today = 'Lovely';
console.log(today, elevenFifty);

elevenFifty = 'Super'=
console.log(today, elevenFifty);
