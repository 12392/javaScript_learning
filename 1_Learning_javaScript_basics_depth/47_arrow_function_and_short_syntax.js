// arrow functions
//arrow function does'nt have this keyword it will return undefined
// it will give refrence to one level up and here one lvel up is window 

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}

user1.about(user1);


// short syntax


// const user = {
//     firstName : "harshit",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }   
// }


// we can write like this

// const user = {
//     firstName : "harshit",
//     age: 8,
//     about(){
//         console.log(this.firstName, this.age);
//     }   
// }



//user.about();