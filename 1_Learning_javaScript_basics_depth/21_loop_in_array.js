// for loop in array 

let fruits = ["apple", "mango", "grapes", "banana"];

// for(let i=0; i<=9;i++){
//     console.log(i);
// }

// console.log(fruits.length);
// console.log(fruits[fruits.length-2]);
let fruits2 = [];
for(let i=0; i < fruits.length; i++){
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);


// use const for creating array

// heap memory ["apple", "mango"] 0x11

// const fruits = ["apple", "mango"]; // 0x11
// fruits.push("banana");
// console.log(fruits);



// while loop in array 
const fruits1 = ["apple", "mango", "grapes"];
const fruits3 = [];
let i = 0;
while(i<fruits1.length){
    fruits3.push(fruits1[i].toUpperCase());
    i++;
}
console.log(fruits3);



// for of loop in array
const fruits0 = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits01 = [];

for(let fruit of fruits0){
    fruits01.push(fruit.toUpperCase());
}
console.log(fruits01);



// for in loop in array
// const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits02 = [];

for(let index in fruits){
    fruits02.push(fruits[index].toUpperCase());
}
console.log(fruits02);
