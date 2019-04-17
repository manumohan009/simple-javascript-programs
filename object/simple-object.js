let simpleObjArr = [
    {
        id: 1,
        name: 'Manu',
        age: 32,
        town: 'Kochi',
        salary: 5
    },
    {
        id: 2,
        name: 'Salini',
        age: 29,
        town: 'Kochi',
        salary: 6
    },
    {
        id: 3,
        name: 'JK',
        age: 30,
        town: 'Kochi',
        salary: 4
    },
    {
        id: 4,
        name: 'Sree',
        age: 32,
        town: 'TVM',
        salary: 9
    },
    {
        id: 5,
        name: 'Sree',
        age: 32,
        town: 'Kochi',
        salary: 9
    },
]

// ---------------------------------------------------------------------------------

// var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])

// let filteredObjArr = simpleObjArr.filter((element,index,arr) => {
//     return element.town ==='Kochi';
// })
// console.log(filteredObjArr,"filteredObjArr");


// let filteredObjArr = simpleObjArr.filter((element,index,arr)=>{
//     console.log(arr.indexOf(element));
//     return arr.indexOf(element) === index;
// })
// console.log(filteredObjArr);

// ---------------------------------------------------------------------------------

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// let totalSalary = simpleObjArr.reduce((acc,currentValue,currentIndex,arr)=>{
//     return acc+ Math.round(currentValue.salary);
// },0)
// console.log(totalSalary,"totalSalary");

// ------------------------------------------------------------------------------------

// Remove duplicates
// function uniqByKeepFirst(a, key) {
//     let seen = new Set();
//     return a.filter(item => {
//         let k = key(item);
//         return seen.has(k) ? false : seen.add(k);
//     });
// }

// function uniqByKeepLast(a, key) {
//     return [
//         ...new Map(
//             a.map(x => [key(x), x])
//         ).values()
//     ]
// }

// data = [
//     {a:1, u:1},
//     {a:2, u:2},
//     {a:3, u:3},
//     {a:4, u:1},
//     {a:5, u:2},
//     {a:6, u:3},
// ];
// console.log(uniqByKeepFirst(data, it => it.u))
// console.log(uniqByKeepLast(data, it => it.u))



