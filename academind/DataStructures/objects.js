console.log('########## OBJECTS ##########')

const person = {
    firstName: 'Manu', age: 33, hobbies: ['Sports', 'Cooking'],
    greet(){ console.log('Hi I am '+ this.firstName) }
}
person.lastName='Mohanan'
// person.greet = ()=>{
//     console.log('Hi I am '+ this.firstName)
// }

// delete
delete person.age

person.greet()