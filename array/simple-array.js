let colors = ['red', 'blue', 'white', 'yellow', 'blue', 'white'];
console.log(colors);

//Filter array
// let filteredArray = colors.filter(elements => {
//     return elements.length>4;
// })
// console.log(filteredArray);

// Filter array
// let filteredArray = colors.filter((elements,index,) => {
//     console.log(index);
//     return elements.length>4 && elements.length<6;
// })
// console.log(filteredArray);


// --------------------------------------------------------------------------------------
//Remove duplicates
// let uniqueArray = colors.filter((element,index,arr)=> {
//     console.log(arr.indexOf(element));
//     return arr.indexOf(element) === index;
// })
// console.log(uniqueArray,"uniqueArray");

// ---------------------------------------------------

// Remove duplicates using Spread
// let uniqueArray = [...new Set(colors)];
// console.log(uniqueArray,"uniqueArray");

// ---------------------------------------------------

// Remove duplicates using Set
// function uniqBy(a, key) {
//     let seen = new Set();
//     return a.filter(item => {
//         let k = key(item);
//         return seen.has(k) ? false : seen.add(k);
//     });
// }

// a = [[1,2,3], [4,5,6], [1,2,3]]
// b = uniqBy(a, JSON.stringify)
// console.log(b);

// ---------------------------------------------------

// Remove duplicates using map
// function uniqBy(colors, key) {
//     return [
//         ...new Map(
//             colors.map(x => [key(x), x])
//         ).values()
//     ]
// }
// b = uniqBy(colors, JSON.stringify)
// console.log(b);
// ---------------------------------------------------
// function uniq_fast(a) {
//     var seen = {};
//     var out = [];
//     var len = a.length;
//     var j = 0;
//     for(var i = 0; i < len; i++) {
//          var item = a[i];
//          if(seen[item] !== 1) {
//                seen[item] = 1;
//                out[j++] = item;
//          }
//     }
//     return out;
// }

// a = [[1,2,3], [4,5,6], [1,2,3]]
// b = uniq_fast(a)
// console.log(b);




