// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)
const items = ['item1', 'item2', 'item3'];
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(items);
if(numbers.has(1)){
    console.log("1 is present")
}else{
    console.log("1 is not present")
}
for(let number of numbers){
    console.log(number);
}


//Special Case
// When we do numbers.add(items) mutiple times it will add only one time
// BUT when we do numbers.add(['items1', 'item2']) multiple time it add as much as we add
// because it create different memory for differnt array  




// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueElements = new Set(myArray);
// let length = 0;
// for(let element of uniqueElements){
//     length++;
// }

// console.log(length);