// Sqaure Bracket Notation

let garden = {
    vegetable: 'carrot',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10

};
// console.log(garden.vegetable);

// let x = 'vegetable';
// console.log(garden.x, garden[x]);

let baking = {};
// baking.carrot = 'better make some cake';
// baking['carrot'] = 'better make some cake';
// console.log(baking);

let key = 'water';

Object.keys(garden).forEach(g => {
    // console.log(g);
    if (g === key) {
        console.log(garden [key]);
    }
})