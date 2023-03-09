// lexical environment, scope chain


// As we see (firstName,lastName) variable inside myFunction is not defined so how it is able to print the value

// Explaination
// it is possible beacuse myFunction will create its local memory and elocal xecution phase if it is unintialized then it will check
// in its below execution context in the stack in this case it is function printName here firstName is present but there is no lastName
// therefore function printName will check in its below execution context in the stack in this case it is GEC(Global Execution stack) 
// here lastName is present 
// Refer image(6_Lexical_enviroment)

const lastName = "Vashistha";

const printName = function(){
    const firstName = "harshit";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction()
    
}
printName();