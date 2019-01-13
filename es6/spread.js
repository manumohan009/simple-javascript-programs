"use strict";

function addNumbers(a, b, c) {
    console.log(a + b + c);
}

const nums = [3, 4, 5];
addNumbers(nums[0], nums[1], nums[2]); // without using spread operator
addNumbers(...nums); // using spread operator


let meats = ['bacon', 'ham'];
let food = ['apples', ...meats, 'kiwi', 'rice'];

console.log(food);





