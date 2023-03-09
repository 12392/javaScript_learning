// closures

// function can return functions

// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world")
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// // console.log(ans);
// ans();


//closure are basically function returning function

//Internal working

// what we think happening
// In image(7_closure_1) printFullName will create its function execution context
// after completing its execution context it will return function and it will get assigned to ans in Global execution context
// at that time when global exection reach ans then we can see in image(7_closure_2) it will create its function execution context but in its 
// function execution context there is no fisrtname and lastname 


// whhat is actually happening
// In image(7_closure_3) printFullName will create its function execution context
// after completing its execution context it will return function and it will get assigned to ans in Global execution context
// at that time when global exection reach ans then we can see in image(7_closure_4) it will create its function execution context but in its 
// function execution context it will return function and fisrtname lastname together in the global execution context 


function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}

const ans = printFullName("harshit", "sharma");
// console.log(ans);
ans();