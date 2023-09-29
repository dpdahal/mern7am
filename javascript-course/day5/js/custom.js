// what is function?

// function is a block of code which is executed only when it is called.

// function sayHi(){
//     console.log("Hello");
// }

// sayHi()
// sayHi()

// function accept parameter

// function users(name,age){
//     console.log("hello " +name + " age "+age)
// }

// users('hari',20);


// function add(x,y){
//     console.log(x+y);
// }

// add(5,7);

// optional parameter

// function student(name='admin',age=0){
//     console.log("hello "+name + " " + age);
// }

// student('laxmi');

// alert()
// confirm();
// prompt()

// add,sub,mul,div,mod

// function return value

// function add(x,y){
//     let total =x+y;
//     let sub =x-y;
//     return [total,sub];
  
// }

// console.log(add(4,5))


// function users(names){
//     console.log(names)
// }

// users(['ram','sita','gita','hari'])


// function users(...names){
//     console.log(names)
// }

// users('ram','sita','gita','hari')


// function add(x,y){
//     return x+y;
// }
// let res = add;
// console.log(res(6,7))
// let result =add(1,5);
// console.log(result)

// let users = function(){
//     return "Hello function";
// }

// console.log(users())


// setTimeout(function(){
//     alert("hello")
// },3000);



// let users = function(name,age){
//     return "Hello function "+name + " "+ age;
// }

// console.log(users('ram',30))

// let users =(name,age)=>{
//     console.log(name)
// }

// users('ram')

// let users={
//     name:'ram',
//     info:()=>{
//         console.log(this.name)
//     }
// }

// users.info()

// let x=10;

// function users(){

//     console.log(x)
// }

// users();

// console.log(x)

// window.myname='hari';

// console.log(myname);


// function users(){

//     function info(){
//         return"Hello nested function";
//     }
//    return info;
// }
// let result =users();
// console.log(result())

// console.log(users()());


// function add(x,y){
//     return x+y;
// }

// function total(a,b,cb){
//     let result =cb(a,b);
//     console.log(result)
// }

// total(6,8,add)

// add(50,7)

// function add(x,y){
//     return x+y;
// }

// generator function.

// function* demo(){
//     yield "hello"
//     yield "world"
//     yield "hari"
//     yield "ram"
// }
// let a = demo();
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())



// console.log(typeof(a))

// console.log(typeof(demo()))

// let a=[5,6,7]
// let b =a;
// b.push(50)
// reference of same memory


// function add(x,y){
//     return x+y;
// }

// console.log(typeof add)

// console.log(add(5,6))


// function users(){
//     console.log("hello user");
// }

// (function(){
//     console.log("hello users")
// }())

// let users =(name)=>{
//     return `Hello welcome ${name}`;
// }
// users.userinfo ="hello users info";
// console.log(users.userinfo)
// console.log(typeof users);


// function add(){

// }

// let a = add;


// let users={
//     name:'ram',
//     age:30
// }

// let user = new Function('name','age','return "hello "+name+" "+age');

// // console.log(user('ram',30))
// console.log(new Function())