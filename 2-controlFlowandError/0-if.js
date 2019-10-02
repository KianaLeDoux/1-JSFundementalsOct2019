//* If Conditional **********//

let isOn = true;

if (isOn != true) {
    console.log('The light is on!');
}; // in this case, want the value of (isOn) to match with True, once met it will open the scope and run whatever is inside


if (isOn) {
    console.log('The light is on, yay!');
};

// can check for something to be both true and false

let isOff = false;
 if (isOff ==false) {
     console.log('The light is off');
 }

 let weather = 65;
 if (weather < 70) {
     console.log('Wear a jacket');
 }