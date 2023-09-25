// for,while,do while,nested loop
// for in,for of,forEach,map,filter

// for(let x=1;x<=10;x++){
//     console.log(x)
// }


// for(let x=1;x<=10;x++){
//     console.log("hello")
// }

// WAP to print evne number 2-10
// total enve number
// total odd number

let total_even=0;
let total_odd=0;


for(let x=1;x<=10;x++){
    if(x%2==0){
        console.log(x)
        total_even=total_even+1;
    }else{
        total_odd=total_odd+1;
    }
}

console.log(`Total even number ${total_even} total odd: ${total_odd}`)
