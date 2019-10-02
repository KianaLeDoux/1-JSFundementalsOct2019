// Return

let hi = () => {
    return 'hello';
    // 1.
}

let newName = hi();
//      2.      3.

console.log(newName);
// 1. in other words, return removes the code from being local and makes it global. Allow our data to become available outside of the function.
// 2.  We need a new variable to hold the value of the return
// 3. when called, the function becomes the value of the return

// when i use the return, have to set it to a variable, then evoke my function, and console.log my name