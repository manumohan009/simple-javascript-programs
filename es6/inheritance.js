"use strict";

class Person{
    constructor(name, age, weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    displayName(){
        console.log(this.name)
    }
    displayAge(){
        console.log(this.age);
    }
    displayWeight(){
        console.log(this.weight);
    }
}

class Programmer extends Person {
    constructor(name, age, weight, language){
        super(name, age, weight);
        this.language = language;
    }
    displayLanguage(){
        console.log(this.language);
    }
}

let bucky = new Person('Bucky', 87, 6650);
let sally = new Programmer('Sally', 21, 89, 'Java');

bucky.displayName();
bucky.displayAge();
bucky.displayWeight();

console.log('---------------');

sally.displayName();
sally.displayAge();
sally.displayWeight();
sally.displayLanguage();