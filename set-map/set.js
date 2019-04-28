// const mySet = new Set()

arr = ['qqqq','wwww','eeee'];
const mySet = new Set(arr)
mySet.add(1);
mySet.add(9);
mySet.add(3);
mySet.delete('wwww');
// mySet.clear();
console.log(mySet.has(3),"has 3")
console.log(mySet.size,"size")
mySet.forEach(e => console.log(e))
console.log(mySet);