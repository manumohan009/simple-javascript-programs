/* Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday. 
Current time is : 10 PM : 30 : 38 */

let today = new Date();
let day = today.getDay();
let fullYear = today.getFullYear();
let date = today.getDate();
let hours = today.getHours();
let milliseconds = today.getMilliseconds();
let minutes = today.getMinutes();
let month = today.getMonth();
let seconds = today.getSeconds();
let time = today.getTime();
let year = today.getYear();


let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let prepand = (hours>= 12)? " PM ":"AM";
hours = (hours >=12)? hours - 12: hours;
if(hours === 0 && prepand ==='PM') {
    if(minutes === 0 && second === 0){
        hours = 12;
        prepand ='Noon';
    }else {
        hours = 12;
        prepand = ' PM';
    }
}
if(hours === 0 && prepand ===' AM'){
    if(minutes === 0 && second === 0){
        hours = 12;
        prepand = ' Midnight';
    } else {
        hours = 12;
        prepand = ' AM';
    }
}
console.log(`Today is: ${dayList[day]}` );
console.log(`Current Time: ${hours} ${prepand} : ${minutes} : ${seconds}`);




// console.log(`today is: ${today}` );
// console.log(`day is: ${day}` );
// console.log(` fullYear is: ${fullYear}` );
// console.log(` date is: ${date}` );
// console.log(` hours is: ${hours}` );
// console.log(` milliseconds is: ${milliseconds}` );
// console.log(` minutes is: ${minutes}` );
// console.log(` month is: ${month}` );
// console.log(` seconds is: ${seconds}` );
// console.log(` time is: ${time}` );
// console.log(` year is: ${year}` );