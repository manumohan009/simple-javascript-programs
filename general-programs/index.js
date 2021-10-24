// To check if an item is there in an array

// let arr = ['a', 'q', 'w', '1']
// let str = 'manumohanan'

// console.log(arr.includes('a')) // true
// console.log(arr.includes('b')) // false
// console.log(str.includes('ma')) // true
// console.log(str.includes('q')) // false

// -------------------------------------------------------------------------------------

// To find the index of an item in array

// let arr = ['a', 'q', 'w', '1']
// let str = 'manumohanan'
// let num = [1,4,2,4,7,8,3,11,3]

// console.log(arr.indexOf('q')) // 1
// console.log(str.indexOf('h')) // 6

// console.log(num.findIndex((element)=>{ // 7
//     return element > 10
// }))
// console.log(num.findIndex((element)=>{ // -1
//     return element > 50
// }))

// -------------------------------------------------------------------------------------


// To find an item in an array

// let arr = ['a', 'q', 'w', '1']
// let str = 'manumohanan'
// let num = [1,4,2,4,7,8,3,11,3]

// console.log(num.find((element)=>{ // 4
//     return element > 2
// }))

// -------------------------------------------------------------------------------------

// To convert a string into array and string into array
// let str = 'manumohanan'

// let arr = str.split('')
// console.log(arr)
// let joinedArr = arr.join('')
// console.log(joinedArr)


// -------------------------------------------------------------------------------------

// To convert an array into set and a set into array

// let num = [1,4,2,4,7,8,3,11,3]

// let mySet = new Set(num)

// console.log(num) //[ 1, 4, 2, 7, 8, 3, 11 ]
// console.log(mySet) //{ 1, 4, 2, 7, 8, 3, 11 }
// let arr = Array.from(mySet)
// console.log(arr) // [ 1, 4, 2, 7, 8, 3, 11 ]

// -------------------------------------------------------------------------------------

// To convert an object values/keys into an array

// let obj = {
//     name: 'Manu',
//     age: '35',
//     gender: 'Male'
// }

// let keyArr = Object.keys(obj)
// let valueArr = Object.values(obj)

// console.log(keyArr) // [ 'name', 'age', 'gender' ]
// console.log(valueArr) // [ 'Manu', '35', 'Male' ]

// -------------------------------------------------------------------------------------

// To traverse over an object

// let obj = {
//     name: 'Manu',
//     age: '35',
//     gender: 'Male'
// }

// for(key in obj){
//     console.log(key) // name age gender
// }
// for(key in obj){
//     console.log(obj[key]) // Manu 35 Male
// }

// -------------------------------------------------------------------------------------


// To iterate over an array

// let num = [1,4,2,4,7,8,3,11,3]

// for(item of num){
//     console.log(item) // 1 4 2 4 7 8 3 11 3
// }

// num.forEach((element, index)=>{
//     console.log(element) // 1 4 2 4 7 8 3 11 3
// })

// newNum = num.map((element, index)=>{
//     return element+1
// })
// console.log(newNum) // [2, 5,  3, 5, 8,9, 4, 12, 4]

// -------------------------------------------------------------------------------------

// To sort a numeric array

// let num = [1,4,2,4,7,8,3,11,3]

// let sortedArr = num.sort((a,b)=>{
//     return a - b
// })
// console.log(sortedArr)

// -------------------------------------------------------------------------------------


// To clone an array

// let num = [1,4,2,4,7,8,3,11,3]

// let arr1 = num.slice(0)
// console.log(arr1) 

// let arr2 = [...num]
// console.log(arr2) 

// -------------------------------------------------------------------------------------

// To clone an object

// let obj = {
//     name: 'Manu',
//     age: '35',
//     gender: 'Male',
//     nestedObj: {
//         test:'initial'
//     }
// }

// let clonedObj1 = {...obj} // shallow copy
// clonedObj1.nestedObj.test = 'modified'
// console.log(clonedObj1, 'clonedObj1')
// console.log(obj, 'obj')

// let clonedObj2 = Object.assign({}, obj) // shallow copy
// clonedObj2.nestedObj.test = 'modified'
// console.log(clonedObj2, 'clonedObj2')
// console.log(obj, 'obj')

// let clonedObj3 = JSON.parse(JSON.stringify(obj)) // deep copy
// clonedObj3.nestedObj.test = 'modified'
// console.log(clonedObj3, 'clonedObj3')
// console.log(obj, 'obj')

// -------------------------------------------------------------------------------------













// To remove duplicates from an array using sets

// let num = [1,4,2,4,7,8,3,11,3]
// let noDupArr = []

// let mySet = new Set()
// num.forEach((element)=>{
//     mySet.add(element)
// })
// console.log(mySet) //{ 1, 4, 2, 7, 8, 3, 11 }
// noDupArr = Array.from(mySet)
// console.log(noDupArr) // [ 1, 4, 2, 7, 8, 3, 11 ]