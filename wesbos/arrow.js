const names = ['wes', 'kait', 'lux'];
const fullNames = names.map(function(name){
    return `${name} bos`;
});

const fullNames2 = names.map(name => {
    return `${name} bos`;
})
const fullNames3 = names.map(name => `${name} bos`) // implicit return
console.log(fullNames3);

// Arrow functions are anonymous functions

// -----------
// map function is applied on an array and it returns a new modifies array
const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];
const win = winners.map((winner,i) => ({name: winner, race, place: i+1}));
console.log(win);

// -----------
// filter function is applied on an array and it returns a new array with filtered values
const ages = [23, 34, 56, 78, 34, 56, 23, 100];
const old = ages.filter(age => age > 50);
console.log(old);

// an arrow function inherits the value of 'this' from the parent
// use arrow function inside a normal function
