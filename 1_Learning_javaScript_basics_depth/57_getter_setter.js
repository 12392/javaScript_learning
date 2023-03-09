// getter and setters 
// Above will create a property of a function below is ths example
// we use person1.fullName() but by using getter----> person1.fullName
// Similarly for setter---> person1.fullName = "mohit vashistha";


class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("harshit", "sharma", 5);
//console.log(person1.fullName());
console.log(person1.fullName);
person1.fullName = "mohit vashistha";
console.log(person1);