const str1 = '20-AC2018-jz'

console.log(str1.startsWith('20'));
console.log(str1.startsWith('AC',3)); // starts after 3 char

console.log(str1.endsWith('jz'));
console.log(str1.endsWith('2018',9)); // takes the first 9 char and ignore the rest

console.log(str1.includes('AC')); // searches for the text anywhere in the str

console.log(str1.repeat(3));
function leftPad(str, length=20) {
    console.log(' '.repeat(length - str.length)+ str);
}
leftPad(str1, 20);
leftPad('Manu', 20);



