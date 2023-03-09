// function "this" will return that button we are clicking
const btn = document.querySelector(".btn-headline");

btn.addEventListener("click",function(){
    console.log("you clicked me !!!!");
    console.log("value of this")
    console.log(this);
});




// Arrow function "this" will return on point above that is window
//const btn = document.querySelector(".btn-headline");

// btn.addEventListener("click",() => {
//     console.log("you clicked me !!!!");
//     console.log("value of this")
//     console.log(this);
// });