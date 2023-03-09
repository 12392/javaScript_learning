// fetch 
// it will return promises
// when internet is not connected then it goes to catch block
// headers are import during post request

const URL = "https://jsonplaceholder.typicode.com/postssss";

fetch(URL,{
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(response =>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error("Something went wrong!!!")
        }
    })
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log("inside catch");
        console.log(error);
    })