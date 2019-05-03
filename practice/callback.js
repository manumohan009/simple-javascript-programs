
getUser(1,(user)=> {
    console.log(user);
    getRepositories(user,(repo)=>{
        console.log(repo);
        getCommits(repo,(commits)=>{
            console.log(commits);
        })
    })
})




function getUser(id,cb) {
    console.log('Fetching user details')
    setTimeout(()=> {
        cb({id:'1', name:'Manu'});
    },2000)
}

function getRepositories(user, cb){
    console.log('Fetching repositories');
    setTimeout(()=> {
        cb(['repo1','repo2','repo3']);
    },2000)
}

function getCommits(repo, cb){
    console.log('Fetching commits');
    setTimeout(()=> {
        cb(['commit1','commit2','commit3']);
    },2000)
}