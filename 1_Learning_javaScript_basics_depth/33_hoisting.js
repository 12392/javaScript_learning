
// hoisting 

//Calling hello() before function declration
hello();

function hello(){
    console.log("hello world");
}

//printing hello before assigning
console.log(hello);

var hello = "hello world";
console.log(hello);