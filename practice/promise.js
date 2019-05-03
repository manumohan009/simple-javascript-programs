getUser(1)
    .then((user)=>{
        console.log(user);
        return getRepositories(user);
    })
    .then((repo)=>{
        console.log(repo);
        return getCommits(repo);
    })
    .then((commits)=>{
        console.log(commits);
    })
    .catch((err)=>{
        console.log(err);
    })




function getUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve({id:id, name:'Manu'})
        },2000)
    })
}


function getRepositories(user){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve(['repo1', 'repo2', 'repo3']);
        },2000)
    })
}

function getCommits(repo){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve(['commit1','commit2','commit3']);
        },2000)
    })
}