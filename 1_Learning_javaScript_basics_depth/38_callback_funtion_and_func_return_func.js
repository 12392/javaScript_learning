// callback functions 
// function wiil be passed as argument inside the function

console.log("callback");
function myFunc2(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("hello there I am a func and I can..")
    callback("harshit");
}


myFunc(myFunc2);






// function returning function 
console.log("func_return_func");
function myFunc1(){
    function hello(){
        return "hello world"
    }
    return hello;
}

const ans = myFunc1();
console.log(ans());




// Both callback and func_return_func are collectively known as higher order function 