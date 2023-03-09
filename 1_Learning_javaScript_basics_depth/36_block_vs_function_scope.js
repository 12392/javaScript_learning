// block scope vs function scope 


// let and const are block scope
// In below example we can see in block firstName is accesable while outsuide block firstName is not accesable
// whereas in var will be acceable outside the block
if(true){
    let firstName = "harshit";
    console.log(firstName);
}

console.log(firstName);


// var is function scope 

// if(true){
//     var firstName = "harshit";
//     console.log(firstName);
// }

// console.log(firstName);






// function myApp(){
//     if(true){
//         var firstName = "harshit";
//         console.log(firstName);
//     }

//     if(true){
//         console.log(firstName);
//     }
//     console.log(firstName);
// }

// myApp();