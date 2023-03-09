// function execution context

// As we know in global execution context there it create a memory creaction phase & execution phase and add it in a stack
// but as soon as it encounters a function it create a local memory creaction phase & local execution phase as we can 
// see in the image() and add in the stack where GEC is added there it performs all the functionalties same like GEC
// but it also create a array like object for argument after completing all the task it get pop out from stack and 
// execution get continue in GEC

 let foo="foo";
 console.log(foo);
 function getFullName(firstName, LastName){
     console.log(arguments); 
     let myVar = "var inside func";
     console.log(myVar); 
     const fullName = firstName + LastName;
     return fullName; 
    }
 const personName = getFullName("harshit", "sharma");
 console.log(personName);