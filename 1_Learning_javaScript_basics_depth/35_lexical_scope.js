// lexical scope 
const myVar = "value1";

function myApp(){
    

    function myFunc(){
        // const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }


    console.log(myVar);
    myFunc();
}

myApp();

// myVar variable inside myFunc2 is not defined so it will fetch the value from the lexical enviroment in this case
// lexical enviroment is myFunc but there myVar value is not defined then myFunc will check in his
// lexical enviroment which is myApp and here myApp has defined the value for myVar so same will be assigned to myVar in myFunc2