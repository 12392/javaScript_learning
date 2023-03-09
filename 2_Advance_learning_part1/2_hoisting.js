// hoisting
// As we can see we are able to print (fullname , myFunction) before decleartion without any error this is called hoisting

// Explaination
// As we can see in image(1_Global_execution_context_2) while in global execution context phase (GEC)
// it will first execute global memory part and in that part initially it had defined the variables as undefined and function as function in the memory




console.log(this);
console.log(window);
console.log(myFunction);

console.log(fullName);

function myFunction(){
    console.log("this is my function");
}

var firstName = "Harshit";
var lastName = "Sharma"
var fullName = firstName + " " + lastName;
console.log(fullName);