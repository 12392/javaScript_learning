// Promise

// new Promise will produce promise
// then will consume promise
// consume part is perform by browmser

//// As we can see in image 4_intro_promise.png that code will execute
// line by line when it encounters "then" it will send it to web api 
// after that it will send it to microtask queue and it will release the queue when all the statement is over

// but if setTimeout is present then microtask queue will relese its queue first then the callback queue where seTimeout is present




console.log("script start");
const bucket = ['coffee', 'chips','vegetables','salt','rice'];



const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"friedrice"});
    }else{
        reject("could not do it");
    }
})

// produce 



// consume 
// how to consume 

friedRicePromise.then(
    // jab promise resolve hoga 
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    ).catch(
    (error)=>{
        console.log(error)
    })


setTimeout(()=>{
    console.log("hello from settimeout")
},0)

for(let i = 0; i <=100; i++){
    console.log(Math.random(), i);
}

console.log("script end!!!!")