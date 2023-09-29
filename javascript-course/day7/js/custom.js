"use strict";

// function deepFreeze(object) {
//     // Retrieve the property names defined on object
//     const propNames = Reflect.ownKeys(object);
  
//     // Freeze properties before freezing self
//     for (const name of propNames) {
//       const value = object[name];
  
//       if ((value && typeof value === "object") || typeof value === "function") {
//         deepFreeze(value);
//       }
//     }
  
//     return Object.freeze(object);
//   }
  

// const users={
//     name:'laxmi',
//     age:23,
//     address:{
//         city:'kathmandu'
//     }
// }
// deepFreeze(users)
// Object.freeze(users)
// users.name ='sophia'
// users.address.city='pokhara'
// console.log(users)

// what is object?

// object is a collection of key value pairs

// let users={
//     name:'ram',
//     age:20,
//     phone:98797
// }
// users.address='kathmandu'

// console.log(users);
// console.log(users['name']);
// console.log(users.name);
// console.log(users.address)

// console.warn('this is test')
// console.error("This is error method")


// let users={
//     name:'ram',
//     age:20,
//     phone:98797
// }

// console.table(users)

// console.time("starttime");
// for(let a=1;a<=100;a++){
//     console.log(a)
// }

// console.timeEnd("starttime");

// let name ='ram';
// let age=20;
// let address='ktm'

// console.group("mygroup")
// console.log(name)
// console.log(age)
// console.groupEnd()

// console.log(address)

// console.log(console)


// let users={
//     name:'ram',
//     age:20,
//     phone:98797,
//     address:{
//         city:'ktm',
//     }
// }
// let obj = new Object({name:'hari'})

// console.log(users)

// delete users.age
// console.log(users)
// console.log(users.address.city)

// let users=['ram','sita','hari'];

// let a =users[0]
// let [a,...b]=users


// let users={
//     name:'ram',
//     age:20,
//     phone:98797,
//     address:{
//         city:'ktm',
//     }
// }

// const {name,age,address:{city}} =users
// const {a} = users;
// console.log(a)

// let users={
//         name:'ram',
        
//     }

// const {name:usernane} =users
// console.log(usernane)



// let students=[
//     {id:1,name:'ram',age:20},
//     {id:2,name:'sita',age:21,city:['ktm','ltp']}
// ]

// let students={id:2,name:'sita',age:21,city:['ktm','ltp']}
// console.log(students[1].name)
// console.log(students.city[0])