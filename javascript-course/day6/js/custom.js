// What is array?

// Array is a collection of data.
// array index start form 0
// by default array length property is fixed.

// how to create array()
// new Array()
// []

// let users =['ram','sita','gita','hari','laxmi']
// console.log(users);

// let numbsers =[1,9,4,3,8,10]

// numbsers.sort((a,b)=>a-b)
// console.log(numbsers)

// let users =['ram','sita','gita','hari','laxmi']

// let a =users.map(function(name,index){
//     return `Hello ${name}`
// })
// console.log(a)

// let a =users.forEach(function(name,index){
//     return `Hello ${name}`
// });
// console.log(a)

// let users={
//     name:'ram',
//     age:20
// }
// for(let a in users){
//     console.log(users[a])
// }

// for(let a of users){
//     console.log(a)
// }
// for of and for in 

// for(let x of users){
//     console.log(x)
// }

// for(let a in users){
//     console.log(users[a])
// }

// for(let x=0;x<users.length;x++){
//     console.log(users[x])
// }

// let students = ['gopal','raj','shyam','rahul','sita']
// users =users.concat(students)
// console.log(users)
// console.log(users.join(' | '))
// how to access array elements
// console.log(users.at(4))
// console.log(users.slice(2,3))
// shift
// console.log(users.shift())
// console.log(users)
// console.log(users.pop())
// users.push('raj')
// users.push('shyam')
// console.log(users)
// add elements push
// console.log(users)
// console.log(users[0])
// console.log(users[1])

// console.log(users[users.length-1])

// let students = ['gopal','raj','shyam','rahul','sita']
// let users = ['sophia']
// users.copyWithin(0,students)
// console.log(students)
// students.unshift('hari')
// console.log(students)
// let a =students.filter((name)=>name.length>4)
// console.log(a)

// for(let x=0;x<students.length;x++){
//     if(students[x]==='raj'){
//         students[x]='ram'
//     }
// }


let numbers =[23,24,25,26]
console.log(numbers)
numbers.copyWithin(1,3)
console.log(numbers)