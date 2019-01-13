
let movie = 'Good will hunting' // global scope
function theNotebooke(){
    let movie = 'The Notebook'; // block scope
    return movie;
}
console.log(movie);
console.log(theNotebooke());
console.log(movie);

function buckyFunction() {
    let isHorse = true;
    let saying = 'Bacon is good';
    console.log('\nBefore if:', saying);
    if(isHorse){
        let saying= 'I am a horse';
        console.log('Inside if:', saying);
    }
    console.log('After if:', saying);
}
buckyFunction();