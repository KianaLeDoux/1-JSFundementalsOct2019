let list = ['orange', 'banana', 'oreos']
console.log(list[1]) // you do not need curly brackets when you work with arrays

// let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['John', 'Eric', 'Sam']]
// console.log(typeof students) // it runs and console logs the object, which is students 
// console.log(students instanceof Array);
// console.log(students[1]);
// console.log(students[3]) 
// thr number 3 will console log the name Ray, because in an array, it counts the first number in a list as 0.

// Challenge:

// let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['John', 'Eric', 'Sam']]
// console.log( students [6] [2])

// how to actually do this challenge where you get the name sam from a nested array

// let name = students [6][2];
// console.log(`Hello ${name}, how are you today.`)


food.push('Cool Beans'); // puts the word and pushes it into the list you have
// food.splice(1, 1, 'Cookies')
// food.pop();
// food.shift() // removes first element of an array 
food.unshift('Pasta', 'Hamburger') // puts things in the begining.

// pop removes the last element 
 // when you do a food splice, it removes whatever number you place in there.
// for (f of food) {
// console.log(f) }
// the letter f is placeholder, it's the (of) that matters}

for (f in food) {
    console.log(f)
}

let food = ['Pecan pie', 'Shrimp', 'Quesdailla', 'Cheese Cake', 'Hotdog'];
// food.forEach(f => {console.log(f)})
// food.forEach((f, number)=>{console.log(f);console.log(number)}) 
// with this method, we can see the index and the item together 
// food.forEach((f, number, array)=>{console.log(f); console.log(number); console.log(array)}) 


let food = ['Pecan pie', 'Shrimp', 'Quesdailla', 'Cheese Cake', 'Hotdog'];

let foodFunction = () => {
    for (f in food) {
    console.log(f),
    console.log(food[f]),
    console.log(food)
    }
}

// create a list (with an array) of movies, use .forEach() to list your movies, add another movie at the end, and replace one of yoour exisiting moves with another one

let movie = ['SuperBad', 'Southpaw', 'John Wick', 'The Hangover'];
movie.push('22 Jump Street')
console.log(movie)

.forEach(m in movie) {
    
});

let long = [1, 2,3, 4,5,6,7,8,9,10]
console.log(long.length)

let colors = ['blue', 'green', 'yellow','red', 'orange', 'purple'];
// console.log(colors.length)
// console.log(colors.toString())
// console.log(typeof colors)
// console.log(typeof colors.toString())

// exmaple of a foreach loop

colors.forEach(c => console.log(c))

// Challenge: 
//Check if working with Array - flip the values within the array, (what was in index 4, is now in 0, 3 to 1, etc.) Using amethod oly print the values of the newly arranged array

let arr = [1,2,3,4,5]
 // arr = [5,4,3,2,1]
// arr.unshift();
// console.log(arr);

if (arr instanceof Array === true) {
    let revArr =arr.reverse()
    revArr.forEach(a =>console.log(a))
} // how to flip an array 


