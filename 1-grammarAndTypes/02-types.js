// Boolean
// boolean can represent: true/false, yes/no, on/off - the keyword of trueor false lets us know it's a boolean


let i = true;
let j = false;

console.log(i);

// Null
// null is an empty value. It is not zero or undefined. 
// It is like an empty container; nothing is in it, but it still exists as a space to fill. 


let empty = null; 
console.log(empty);

//Undefined
//undefined simply means there is no value assigned. Not even an empty conatainer. 
//undefined is not an error.

let undef = undefined; //never do this;
console.log(undef);

let grass; 
console.log(grass); // undefined;

//undefined is when a variable hasn't been set or created yet

//Numbers
let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite =0.2+ 0.1;
console.log(notQuite);

let numberAreHard = (0.2*10+0.1*10) /10;
console.log(numberAreHard);

// Strings
//Strings are data types used to represent text wrapped in single or double quotes. 

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = '1050' + '100';

console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

let third = 1050 + '100';
console.log(third);
console.log(typeof third);

//Objects

let car = {
color: 'red',
tires: 4,
extras: 'A/C and Radio',
cool: true
}
console.log(car);
console.log(typeof car);

//Arrays
//Arrays are containers that hold lists of items; 


let list = ['item1', 'item2', 'item3'];
//    (1)  (2)   (3)

//1- name of the array;
//2- sqaure brackets = array;
//3 - each item, regardless of data type of seperated by commas.

let grocerylist = ['milk', 'apples', 'cereal'];
console.log(grocerylist);
console.log(typeof grocerylist); // object

// addition vs concatenation 
// concatenation is the smushing of two words together 
//check out javascript coersion 

let firstName = 'Kiana';
let lastName = 'LeDoux';
let houseNumber = '7575';
let street = 'Timber Springs Dr S.';
let city = 'Fishers';
let state = 'Indiana';
let zipcode = '46038';

console.log(firstName, lastName + ',' houseNumber, street +',', city + ',' , state, zipcode);

//Strings - Properties
/* 
Properties are qaulities asscoiated with a dataType.
Strings have properties associated with thatstring.
E.g. the length of a string is a property. 
*/


let myName = 'Kiana';
console.log(myName.length);

//Methods 
// Methods are tools that can help us manipulate our data.

//*.property = no parentheses;
//* .methods() = parentheses;


let myNameIs = 'Kiana';
console.log(myNameIs.toUpperCase()); // when uppercase, it uppercases all my letters


let home = 'My home is Indianapolis';
console.log(home.includes('Indianapolis'));



//Use google to fin MDn documentation for strings, research and use the split method to get an array back from this string


let sent = 'This sentence will be split into individual parts';

console.log(sent.split());
console.log(sent.split(''));
console.log(sent.split(' '));


