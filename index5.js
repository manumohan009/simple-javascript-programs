/* Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050 */

for(let year = 2014; year <= 2050; year++){
    let d = new Date(year, 0, 1);
    //console.log(d);
    if(d.getDay() === 0) {
        console.log('1st January is being a Sunday ' + year);
    }
}

