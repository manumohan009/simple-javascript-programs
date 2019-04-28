

let car1 = {
    make: 'Honda',
    model: 'Civic'
}
let  carWeakSet = new WeakSet(car1);
// carWeakSet.add(car1);

console.log(carWeakSet);
