console.log('########## SETS ##########')

const ids = new Set()
ids.add('Thanima')
ids.add(45);
ids.add('Manu');

for(el of ids){
    console.log(el)
}

// has
console.log(ids.has('manu')) // returns true for false

// delete
ids.delete(45);
console.log(ids)