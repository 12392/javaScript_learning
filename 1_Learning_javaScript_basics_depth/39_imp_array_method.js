 // forEach method

console.log("**************FOR_EACH*****************");

 // function myFunc(number, index){
 //     console.log(`index is ${index} number is ${number}`);
 // }
 
 // numbers.forEach(function(number,index){
 //     console.log(`index is ${index} number is ${number}`);
 // });
 
 // numbers.forEach(function(number, index){
 //     console.log(number*3, index);
 // })
 
 const users = [
     {firstName: "harshit", age: 23},
     {firstName: "mohit", age: 21},
     {firstName: "nitish", age: 22},
     {firstName: "garima", age: 20},
 ]
 
 // users.forEach(function(user){
 //     console.log(user.firstName);
 // });
 
 users.forEach((user, index)=>{
     console.log(user.firstName, index);
 })
 
 // for(let user of users){
 //     console.log(user.firstName);
 // }







// map method 
console.log("**************MAP*****************");
// map method returns array

// const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);

const users1 = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

const userNames = users1.map((user)=>{
    return user.firstName;
});

console.log(userNames);







// filter method
//// filter method returns array of true and false so we have to manipulate output accordingly 
console.log("**************FILTER*****************");

const numbers = [1,3,2,6,4,8];

const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(evenNumbers);



// reduce 
console.log("**************REDUCE*****************");
//const numbers = [1,2,3,4,5, 10];

// aim : sum of all the numbers in array 

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 100);

// console.log(sum);
// accumulator , currentValue,  return 
// 1               2              3 
// 3               3              6
// 6               4              10
// 10              5              15
// 15              10             25


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
}, 0)

console.log(totalAmount);

// total price      currentValue     return 
// 0                {}                  12000
// 12000            22000                34000
// 34000            15000                49000










// sort method 
console.log("**************SORT*****************");
// ASCII TABLE 
//char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125


// sort  
// sort will sort the values as string

//Example
// 5,9,1200, 400, 3000
// 5, 9, 400, 1200, 3000 (expected)

// ["5", "9", "1210", "410", "3000"] 
// [53, 57, 49, 52, 51]

// const userNames = ['harshit', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'Harshit'];
// userNames.sort();
// console.log(userNames);

// const numbers = [5,9,1200, 410, 3000];
// numbers.sort((a,b)=>{
//     return b-a;
// });
// numbers.sort((a,b)=>a-b);
// console.log(numbers);

// 1200,410 
// a-b ---> 790
// a-b ---> postive (greater than 0) ---> b, a
// 410 , 1200

// a-b ---> negative ----> a,b
// 5, 9 ---> -4 
// price lowToHigh HighToLow 
const products = [
    {productId: 1, produceName: "p1",price: 300 },
    {productId: 2, produceName: "p2",price: 3000 },
    {productId: 3, produceName: "p3",price: 200 },
    {productId: 4, produceName: "p4",price: 8000 },
    {productId: 5, produceName: "p5",price: 500 },
]

// lowToHigh
const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price-b.price
});

const highToLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price;
});



// const users05 = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]


// users05.sort((a,b)=>{
//     if(a.firstName > b.firstName){
//         return 1;
//     }else{
//         return -1;
//     }
// });

console.log(lowToHigh);





// find method
console.log("**************FIND*****************");
//it will check the first ocuurence
//if it not find anything it will return undefined 

// const myArray = ["Hello", "catt", "dog", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

const users001= [
    {userId : 1, userName: "harshit"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "aaditya"},
];

const myUser = users001.find((user)=>user.userId===3);
console.log(myUser);







// every method
// it will check for al elements in a array whther they follinf the condition or not if any of the 
//condition is false then it will retuen false

console.log("**************EVERY*****************");
// const numbers = [2,4,6,9,10];
// const ans = numbers.every((number)=>number%2===0);
// console.log(ans);

const userCart01 = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]


const ans = userCart01.every((cartItem)=>cartItem.price < 30000);
console.log(ans);






// some method 
console.log("**************SOME*****************");

//const numbers = [3,5,11,9];

// kya ek bhi number esa hai jo even hai 
// true 

// const ans = numbers.some((number)=>number%2===0);
// console.log(ans);

const userCart02 = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
    {productId: 3, productName: "macbook", price: 25000},
]

const ans01 = userCart02.some((cartItem)=>cartItem.price > 100000);
console.log(ans01);




// fill method 
console.log("**************FILL*****************");
// value , start , end 

// const myArray = new Array(10).fill(0);
// console.log(myArray);

const myArray = [1,2,3,4,5,6,7,8];
myArray.fill(0,2,5);
console.log(myArray);





// splice method
console.log("**************SPLICE*****************");
// start , delete , insert 

const myArray01 = ['item1', 'item2', 'item3'];

// delete
// const deletedItem = myArray01.splice(1, 2);
// console.log("delted item", deletedItem);
// insert 
// myArray01.splice(1, 0,'inserted item');

// insert and delete 
const deletedItem = myArray01.splice(1, 2, "inserted item1", "inserted item2")
console.log("delted item", deletedItem);
console.log(myArray01);




