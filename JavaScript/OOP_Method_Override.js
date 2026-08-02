class Animal {
  speak() {
    console.log("Animal");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}

const c = new Cat();

c.speak();
