// Calling Functions 
// Functions again are places to run code for us, think of it likea pierce of machinery. You can insatll them, plug them in, but don't work until you hit a start or on button. That function won't run unless it's called or evoked.

function hi() {
 console.log('Hi');
 return "Hi";
}
// for function to run, need to invoke it/call it 
hi();
console.log(hi());

//Challenge: lists the numbers 1-10

// function number() {
//     for (i = 1; i<= 10; i+=);
// console.log(i);
// }

// number();
// number();

let arr = ['This', 'is', 'really', 'cool'];
function arrlist() {
    for(let word in arrList) {
        console.log(arr[word]);
    }
}

function seperate() {
    for(word of arr){
        console.log(word){
    
        }
    }
}

seperate();