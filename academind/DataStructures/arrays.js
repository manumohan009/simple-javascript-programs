console.log('########## ARRAYS ##########')
const names = ['Max', 'Manu', 'Thanima', 'Max']
console.log(names[1]);
console.log(names.length,'array length');

// iterate using for of loop
for (const el of names){
    console.log(el)
}
// add an element
names.push('Thanima');

// find, findIndex, splice are performance intensive
// find
const manu = names.find(el=>el==='Manu') // returns 'Manu'
console.log(manu)

// findIndex
const manuIndex = names.findIndex(el=>el==='Manu') // returns 1
console.log(manuIndex)

// splice
const spliceRes =  names.splice(2,2); // removes and return 2 items from index 2
console.log(spliceRes, 'spliceRes')
console.log(names)

