console.log('Before A');
getUser(1,getRepositories);
console.log('After A')

function getRepositories(user){
    getRepositories(user,getCommits);
}
function getCommits(repo){
    getCommits(repo,displayCommits)
}

function displayCommits(commits){
    console.log(commits);
}

// function  getUser(id) {
//     setTimeout(()=>{
//         console.log('Reading data from database');
//         return {'id':id, 'name':'Manu'}
//     },2000)
// }

// Callbacks
function getUser(id, cb1){
    setTimeout(()=> {
        console.log('Reading data from database');
        cb1({'id':id, 'name':'Manu'})
    },2000);
}

function getRepositories(username,cb2){
    // return['repo1','repo2','repo3'];
    setTimeout(()=> {
        console.log('Reading repositories');
        cb2(['repo1','repo2','repo3']);
    },2000);
}

function getCommits(repo,cb3){
    // return['repo1','repo2','repo3'];
    setTimeout(()=> {
        console.log('Reading repositories');
        cb3(['commit1','commit2','commit3']);
    },2000);
}



// Promises
// Async-Await 