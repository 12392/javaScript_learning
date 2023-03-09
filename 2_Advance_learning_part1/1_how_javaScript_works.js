// How JavaScript works?

//Ans
// There are two steps 
// 1) compile or compilation phase
// 2) code execution

// compilation phase divided in three parts
// 1) Tokenizing / lexing
// 2) Parsing
// 3) code generation



// Why there is a need of compilation phase?

//Ans
// Compilation phase is responsible for two imp things
// 1) Early error checking
// 2) Appropiate scope for variable



// Code Execution part
// In javaScript code executes inside the execution context
// First time when the execution context created it is known as Global Execution Context


// Global execution context divided in 2 parts
// 1) creation phase
// 2) code execution phase


console.log("**********Exapmle1************");
console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Harshit";
console.log(firstName);


 

console.log("**********Exapmle2************");
console.log(this);
console.log(window);
console.log(myFunction);

console.log(fullName);

function myFunction(){
    console.log("this is my function");
}

var firstName1 = "Harshit";
var lastName1 = "Sharma"
var fullName = firstName1 + " " + lastName1;
console.log(fullName);