// hoisting as function declration

// In case of function declration myFunction will be  trated as variable 
// therefore it will show undefined for myFunction and it will not shot function 


console.log(myFunction);

var myFunction = function(){
    console.log("this is my function");
}


// here function is declared so here it will return a function
console.log(myFunction);