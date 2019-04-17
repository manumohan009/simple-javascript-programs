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


// let filteredObjArr = simpleObjArr.filter((element,index,arr) => {
//     return element.town ==='Kochi';
// })
// console.log(filteredObjArr,"filteredObjArr");


let totalSalary = simpleObjArr.reduce((acc,element)=>{
    return acc+ Number(element.salary);
})
console.log(totalSalary,"totalSalary");