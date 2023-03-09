// methods
// function inside object
// use this to access the value to the current object

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "harsh",
    age: 8,
    about: personInfo
}
const person2 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "nitish",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();




// Below this keyword will point to window objec so it will add myFunc to window
// therefore we use 'use strict' to prevent that it will return undefined after that  

// console.log(window);
// "use strict";
// function myFunc(){
    
//     console.log(this);
// }
// myFunc();