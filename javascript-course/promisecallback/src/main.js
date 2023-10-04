// what is promise

// resolve
// reject
// pending


// promise is a object that represent the eventual completion or failure of an asynchronous operation.


// let homework = new Promise((resolve, reject) => {
//     let task = true;
//     if(task){
//         resolve("Task is done");
//     }else{
//         reject("Task is not done");
//     }

// });

// homework.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// console.log(homework);

// fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log(data)
// }).catch((e)=>{
//     console.log(e)
// })


// let data = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(data)


function bank(){
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve("I am form bank");
       }, 5000)
    
    })
}

async function users(){
   let bk =await bank();
   console.log(bk);
    console.log("Hello i am form users");

}

users();

// three method
// call
// apply
// bind 

// storage