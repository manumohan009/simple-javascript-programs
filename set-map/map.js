
const arr = [[1,{name:'aaa'}], [2,{name:'bbb'}]];
const myMap = new Map(arr);
myMap.set(3,{name:'ccc'});
myMap.delete(3);
console.log(myMap.get(1),"get(1)")
console.log(myMap.size,"size")
console.log(myMap.has(1));

console.log(myMap);
