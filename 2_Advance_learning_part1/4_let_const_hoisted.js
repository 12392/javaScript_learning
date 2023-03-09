// Are let and const hoisted? if yes then why it give error if we print before declration?

// Yes let and const are hoisted 

// Exaplantion
// As we can see in the image(4_let_const_hoisted.png) same process is followed like var 
// but in the global memory firstname is unintialized and in case of var it is intialized with undefined
// due to which it gives the error(Uncaught ReferenceError: Cannot access 'firstName' before initialization)

// TDZ(Temporal dead zone)
// The time in which variable is unintialized it is TDZ

console.log(firstName);
let firstName;
console.log(firstName);

// console.log(typeof firstName);

// let firstName = "harshit";