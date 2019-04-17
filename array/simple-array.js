let colors = ['red', 'blue', 'white', 'yellow', 'blue', 'white'];
console.log(colors);

// let filteredArray = colors.filter(elements => {
//     return elements.length>4;
// })
// console.log(filteredArray);

let filteredArray = colors.filter((elements,index,) => {
    console.log(index);
    return elements.length>4 && elements.length<6;
})
console.log(filteredArray);