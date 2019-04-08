// let keepHisWord;
// keepHisWord = true;
// promise1 = new Promise((resolve,reject) => {
//     if(keepHisWord) {
//         resolve('The man likes to keep his word');
//     } else {
//         reject('The man doesnt want to keep his word');
//     }
// });
// console.log(promise1);

// ---------------------------------------------------------------

// promise2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve({
//             message:"The man wants to keep the word",
//             code:"aManKeepsHisWord"
//         })
//     }, 10*1000);
// });
// console.log(promise2);
// promise2.then(function(values) {
//     console.log(values);
// })
// ---------------------------------------------------------------

// PromiseStatus can have three different values. pending resolved or rejected

let momsPromise = new Promise((resolve, reject) => {
    momsSavings = 70000;
    priceOfPhone = 50000;
    if(momsSavings > priceOfPhone) {
        resolve({
            brand:'iphone',
            model: "6s"
        });
    } else {
        reject('We donot have enough savings');
    }
});

momsPromise.then(function(value) {
    console.log('I got the phone as a gift', JSON.stringify(value));
});

momsPromise.catch(function(reason){
    console.log('Mom couldnt buy me phone because', reason);
});

momsPromise.finally(function() {
    console.log('Irrespective of whether my mom can buy me a iphone or not, I still love her');
});

