// // Creation of a promise
// const promiseOne = new Promise(function(ressolve , reject){
//     setTimeout(() => {
//         console.log("Async task is complete")
//     ressolve();
//     }, 1000);
// })
// promiseOne.then(function(){
//     console.log("Promise consmed")
// })

// // now insted of using elaborate method we use this method
// const promiseTwo = new Promise(function(resolve ,  reject){
//     setTimeout(() => {
//         console.log("Async Task 2");
//         resolve()
        
//     }, 1000);
// }).then(function(){
//     console.log("Async task 2 is reslve");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Async Task 2");
//         resolve({username:"Gourav", email:"gourav@gmail.com"})
        
//     }, 1000);
// })
// promiseThree.then(function(user){
//     console.log(user);
    
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = false
//         if(!error){
//             resolve({username:"Gourav", email:"gourav@gmail.com"})
//         }
//         else{
//             reject('ERROR: SOMETHING ERROR IN THIS')
//         }
//     }, 1000);
// })
// promiseFour.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username);
    
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>{
//     console.log("the promise is resolve or rejected");
// })

const promiseFive = new Promise(function(resolve, reject){
    etTimeout(() => {
        let error = false
        if(!error){
            resolve({username:"sunny", email:"gourav@gmail.com"})
        }
        else{
            reject('ERROR: SOMETHING ERROR IN THIS')
        }
    }, 1000);
})