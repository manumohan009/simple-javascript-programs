

function circleArea1(r) {
    const PI = 3.14;
    return PI * r * r;
}


let circleArea2 = (r) => {  // Arrow funcion 
    const PI = 3.14;
    return PI * r * r;
}

// Arrow function ignoring curly braces (single return statement )and paranthesis (single parameter passed)
let circleArea3 = r => 3.14*r*r; 

console.log(circleArea1(7));
console.log(circleArea2(7));
console.log(circleArea3(7));
