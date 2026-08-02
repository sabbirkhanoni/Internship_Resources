class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greet(){
        console.log(
            `Hello ${this.name} and I am ${this.age} years old`
        );
    }
}

const person1 = new Person("Rahim", 25);
person1.greet();