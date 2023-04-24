let user={
    name: 'Sagar',
    lastActivityTime: new Date().getTime()
}
function updateLastUserActitvityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastActivityTime=new Date().getTime()
            resolve(user);
        }, 1000)
    })
}
function createPost(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.name=username;
            resolve('Success');
        }, 1000)
    })
}
function deletionPromise(){
    user={}
}
Promise.all([createPost('Bhaskar'), updateLastUserActitvityTime()]).then(value=>console.log(value))
Promise.all([createPost('Ashu'), updateLastUserActitvityTime()]).then(value=>console.log(value))
Promise.all([createPost('Saarthak'), updateLastUserActitvityTime()]).then(value=>console.log(value))