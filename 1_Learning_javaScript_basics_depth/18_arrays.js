// intro to arrays 
// reference type 
// how to create arrays

// ordered collection of items 

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);
let fruits = ["apple", "mango", "grapes"];
let obj = {}; // object literal
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits);
console.log(typeof fruits);
console.log(typeof obj);
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));


// array push pop 
// array shift unshift 
fruits = ["apple", "mango", "grapes"];
console.log(fruits);
// push --> add at last
// fruits.push("banana");
// console.log(fruits);

// pop --> remove at last
// let poppedFruit = fruits.pop();
// console.log(fruits);
// console.log("popped fruits is", poppedFruit);

// unshift --> add at front
// fruits.unshift("banana");
// fruits.unshift("myfruit");
// console.log(fruits);

// shift --> remove at front
// let removedFruit = fruits.shift();
// console.log(fruits);
// console.log("removed fruits is ", removedFruit);


//push and pop are faster than unshift and shift