const p1 = new Promise((resolve, reject)=> {
    console.log('calling facebook api');
    resolve({id:1, name:'Manu'});
    // reject(new Error('facebook call failed'));
})
const p2 = new Promise((resolve, reject)=> {
    console.log('calling twitter api');
    resolve({id:10, name:'Sree'});
})

Promise.all([p1,p2])
    .then((result)=>{
        console.log(result,'Both api calls are completed')
    })
    .catch((err)=>{
        console.log(err.message);
    })

// Promise.race([p1,p2])
//     .then((result)=>{
//         console.log(result,'One of the api calls are completed')
//     })
//     .catch((err)=>{
//         console.log(err.message);
//     })