

const user1 = {
    firstName : "harshit",
    age: 8,
    about:  function (hobby, favMusician){
        console.log(this.firstName, this.age, hobby, favMusician);
    } 
}
const user2 = {
    firstName : "mohit",
    age: 9,
    
}

// call
// if we want to use about function in user2 from user1 
// we can use call()
user1.about.call(user2, "guitar", "bach");


//apply
// it will use array as argument 
user1.about.apply(user2, ["guitar", "bach"]);


//bind
// it will return function can be use when we need
const func = user1.about.bind(user2, "guitar", "bach");
func();




// don't do this mistake 


const user = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// always call using user1.about() user.about
// user.about();

// if you stote the user.about in a variable then it will give error
// you can use bind for this 
const myFunc = user.about.bind(user1);
myFunc();