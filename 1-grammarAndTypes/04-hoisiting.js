//* Hoisting
console.log(scissors);

scissors = 'blue';

console.log(scissors);
var scissors;

//* JS reads through our code twice. The first time, it looks for the left hand side of variables and functions. Whic is also known as declartaions. 
// The second pass, it reads through the right hand side, and assigns values and expressions.
// We call it hoisting because JS keeps those names stored in memoery for quicker reference later. 
// Let doesn't work with hoisiting. 