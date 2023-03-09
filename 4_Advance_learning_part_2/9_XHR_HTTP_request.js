// BASIC THEORY 

// AJAX : asynchronous javascript and XML

// HTTP request

// is a set of "web development techniques" 
// using many web technologies on the "client-side "
// to create asynchronous web applications. 


// With Ajax, web applications can send and retrieve 
// data from a server asynchronously (in the background) 
// without interfering with the display and 
// behaviour of the existing page

// We don't use data in XML format anymore. 
// we use JSON now. 


// we have 3 most common ways to create and send request to server
// 1.) xmlHTTPRequest (old way of doing)
// 2.) fetch API (new way of doing)
// 3.) axios (this is third party library)




///XHR
const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);
// step1
// console.log(xhr.readyState);
xhr.open("GET",URL);
// console.log(xhr.readyState);
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         console.log(xhr)
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(typeof data);
//     }
// }

xhr.onload = function(){
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}

xhr.send();