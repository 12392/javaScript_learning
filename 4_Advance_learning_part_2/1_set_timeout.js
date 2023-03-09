// synchronous programming vs asynchronous programming
// synchronous programming
// synchronous programming single threaded
// console.log("script start");

// for (let i = 1; i < 10000; i++) {
//   console.log("inside for loop");
// }

// console.log("script end");



// setTimeout

// sertimeout is a feature provided by the browser

// As we can see in image 1_set_timeout_1.png that code will execute
// line by line when it encounters setTimeout it will send it to web api till the minimum time it provided
// after that it will send it to callback queue and it will release the queue when all the statement after 
// setTimeout is complete 

// SetTimeout will also give the id and we can use the id to clear the specific timeout by using clearTimeout(id);

console.log("script start");

const id = setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);

for (let i = 1; i < 100; i++) {
  console.log("....");
}
// console.log("settimeout id is ", id);
// console.log("clearing time out");
// clearTimeout(id);
console.log("Script end");