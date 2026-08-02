class Animal {
  speak() {
    console.log("Sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof");
  }
}

const dog = new Dog();

dog.speak();

dog.bark();
