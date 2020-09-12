console.log('########## MAPS ##########')

const resultData = new Map()
resultData.set('average', 1.53)
resultData.set('lastResult', null)

const germany = {
    name: 'Germany',
    population: 82
}

resultData.set(germany,0.89)

for(const el of resultData){
    console.log(el)
}

// get
console.log(resultData.get('average'))

// delete
resultData.delete('lastResult')
console.log(resultData)