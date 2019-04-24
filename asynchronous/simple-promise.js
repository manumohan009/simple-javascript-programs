console.log('Before');
getUser(1)
    .then((user) => {
        console.log(user);
        return getRepositories(user)
    })
    .then((repo)=> {
        console.log(repo);
        return getCommits(repo);
    })
    .then((commits)=>{
        console.log(commits);
    })
    .catch((err)=>{
        console.log(err);
    });

console.log('After');

function getUser(id){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('Reading data from database');
            resolve({'id':id, 'name':'Manu'})
        },2000)
    })
}

function getRepositories(username){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            console.log('Reading repositories');
            resolve(['repo1','repo2','repo3']);
        },2000);
    })

}

function getCommits(repo){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log('Reading repositories');
            resolve(['commit1','commit2','commit3']);
        },2000);
    })

}