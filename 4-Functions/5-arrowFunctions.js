// Arrow Functions//


function coffee () {
    console.log('Coffee is good');
}


let coffee = () => {
    console.log('I love coffee');
}

coffee ();

cats (1, 12)

let cats =(kitten, puppy) => {
    console.log(`I have ${kitten} cat(s) and ${puppy} dog(s)`)
}

// concise and block body

// concise body does not need parentheses, unless you have more than one parameter 

//example of a concise body
let apples = x => console.log(`There are ${x} apples`);
apples(10);
// more than one parameter will require more than one parantheses
// return (if one-line chunky arrow function is implied)

// exmaple of a block body
let apples = (x) => {console.log (`There are ${x} apples.`)};
apples(20);

// sidenote: Linebreaks are bad! 

let func = () => console.log('hi');

let func = ()
=> console.log('hi');