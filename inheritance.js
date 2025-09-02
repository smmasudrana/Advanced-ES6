// Parent class
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

// Dog class extending Animal
class Dog extends Animal {
    constructor(name, breed, age) {
        super(name, age); // Call the parent constructor
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking`);
    }
}

// Cat class extending Animal
class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age); // Call the parent constructor
        this.color = color;
    }

    meow() {
        console.log(`${this.name} is meowing`);
    }
}

// Bird class extending Animal
class Bird extends Animal {
    constructor(name, species, age) {
        super(name, age); // Call the parent constructor
        this.species = species;
    }

    fly() {
        console.log(`${this.name} is flying`);
    }
}

// Creating instances:
const dog1 = new Dog('Honda', 'Deshi', 3);
dog1.eat();    // From Animal
dog1.bark();   // From Dog
console.log(dog1);

const cat1 = new Cat('Berey', 3, 'White');
cat1.eat();    // From Animal
cat1.meow();   // From Cat
console.log(cat1);

const bird1 = new Bird('Kokil', 'Deshi', 2);
bird1.eat();   // From Animal
bird1.fly();   // From Bird
console.log(bird1);