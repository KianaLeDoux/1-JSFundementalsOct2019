/// If else conditional//

let weather = 65;

if (weather  < 70) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket neccessary');
} // if first statement is true then it doesn't have anything to do with the 'else' statement


let name = Kiana;
if (name = Kiana) {
    console.log('Hello, my name is');
    } else {
        console.log('Hello, is your name?');
    }

let name = 'aUTuMN'
if (name == name.toUpperCase ) {
    console.log(name);
} else{
    console.log(name);
};

let name = 'aUTuMN';

if (name[0]== name.charAt(0).toUpperCase() ) {
let  firstLetter = name [0] + name.slice(1).toLowerCase();
console.log(firstLetter);
} else {
let otherLetters =  name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
console.log(otherLetters);
}


// Else If Statements 





age = 16; // semi colon
if (age <=18) { // less than or equal to peranthesis then curly bracket
    console.log("Sorry you're too young to do anything."); // quotations
} else if (age >=18) {
    console.log("Yay!You can vote");
} else if ( age >= 21) {
console.log("Yay! You can drink") ;
} else if (age>= 25) {
console.log("Yay! You can rent a car");
}
 
if (conditionOne) {
	//Do this
} else {
	if(conditionTwo) {
		//Do this instead
	} else {
		if (conditionThree) {
			//No do this
		} else {
			//Finally do this
		}
	}
}