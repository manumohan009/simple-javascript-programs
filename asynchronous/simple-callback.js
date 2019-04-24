/* console.log('Before A');
getUser(1,(user)=>{
    console.log(user,'user');
    getRepositories(user,(rep)=>{
        console.log(rep);
        getCommits(rep,(commits)=>{
            console.log(commits);
        })
    });
});
console.log('After A')

// function  getUser(id) {
//     setTimeout(()=>{
//         console.log('Reading data from database');
//         return {'id':id, 'name':'Manu'}
//     },2000)
// }

// Callbacks
function getUser(id, cb){
    setTimeout(()=> {
        console.log('Reading data from database');
        cb({'id':id, 'name':'Manu'})
    },2000);
}

function getRepositories(username,cb){
    // return['repo1','repo2','repo3'];
    setTimeout(()=> {
        console.log('Reading repositories');
        cb(['repo1','repo2','repo3']);
    },2000);
}

function getCommits(repo,cb){
    // return['repo1','repo2','repo3'];
    setTimeout(()=> {
        console.log('Reading repositories');
        cb(['commit1','commit2','commit3']);
    },2000);
} */



// Promises
// Async-Await 