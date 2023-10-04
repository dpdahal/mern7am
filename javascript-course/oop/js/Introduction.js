// class Students{
//      x=10;

//       test(){
//         console.log("Hello test function or method");
//      }
// }

// // instance
// let obj = new Students();
// console.log(obj.x)
// obj.test();


// class Calculator{
//     add(x,y){
//         return x+y;
//     }

//     sub(x,y){
//         return x-y;
    
//     }
// }

// let obj = new Calculator();
// console.log(obj.add(10,20));

// class User{
//     name='ram'

//     info(){
//         // let ojb = new User();
//         // console.log(obj.name)
//         console.log(this.name)
//     }
// }

// let obj = new User();
// obj.info();


// let users={
//     name:'ram',
//     info(){
//         console.log(this.name)
//     }
    
// }

// users.info()

// class User{

//     constructor(){
//         console.log("Hello constructor")

//     }

// }

// let obj = new User();


// class User{

//     constructor(name,address){
//         console.log(`Hello ${name} From ${address}`)
//     }


// }

// let obj = new User('ram','ktm');



// class User{
//     constructor(name){
//         this.username=name
//      }

// }

// let obj = new User('sophia');
// console.log(obj.username)

// class Students{
//     #name="laxmi";
   
//     info(){
//         return this.#name
//     }
// }

// let obj= new Students();
// console.log(obj.info())

// class Bank{
//     #amount=0;
//     // setter and getter

//     get amount(){
//         return this.#amount
//     }

//     set amount(value){
//         this.#amount = value
//     }
// }


// let obj = new Bank();
// obj.amount =3000;
// console.log(obj.amount)



// class Bank{
//     static username='ram'
//     static info(){
//         console.log("Hello Bank")
//         console.log(this.name)
//     }
// }
// Bank.info()


// class Bank{

//     static constructor(name,address){

//     }

// }

// let obj = new Bank('ram','ktm');

class Laptop{
    constructor(name){
        console.log(`Hello ${name}`)

    }
    
    brand(bname){
        return `Hello ${bname}`
    }
}

class Dell extends Laptop{

    constructor(name,price){
        super(name)
        console.log(`Hello ${price}`)

    }

}
let obj = new Dell('dd',2000);
console.log(obj.brand('dell'))