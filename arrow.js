/*
Datatypes in Javascript

1. Number - represents integer and floating point
    special numeric values - Infinity, -Infinity, NaN (Not a Number)

2. String - eg "Hello", 'Hello', `Hello ${name}`
3. Boolean - true, false
4. Null -  (means nothing, empty or value unknown)
5. undefined - (means value is not assigned)
6. Objects - (to store collection of data)
7. Symbol - (to create unique identifiers for objects)
--------------

typeof operator
1. As an operator: typeof x.
2. As a function: typeof(x).

------------

Type Conversions
1. ToString - eg let value = true; value = String(value);
2. ToNumber - let num = Number(str)
3. ToBoolean

--------------

Object


*/


//Map

const a = {};
const b = {
    num:1
};

const map = new Map();
map.set(a, 'a').set(b, 'b');

for(let [key, value] of map.entries()) {
    console.log(key, value)
}

const arr = [...map];
console.dir(arr);



// Weak Map

{
    function foo () { return 1 }
    foo() === 1
    {
        function foo () { return 2 }
        foo() === 2
    }
    foo() === 1
}

