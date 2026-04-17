
/* 
    ⁡⁢⁣⁣𝗤) 𝗘𝘅𝗽𝗹𝗮𝗶𝗻 𝘁𝗵𝗲 𝗰𝗼𝗻𝗰𝗲𝗽𝘁 𝗼𝗳 𝗽𝗿𝗼𝘁𝗼𝘁𝘆𝗽𝗮𝗹 𝗶𝗻𝗵𝗲𝗿𝗶𝘁𝗮𝗻𝗰𝗲 𝗶𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁.⁡

        • ⁡⁣⁣⁢Prototypal inheritance is a mechanism where objects can inherit properties and methods from other objects.⁡

        • ⁡⁣⁢⁣Each object has a hidden `[[Prototype]]` property that links to another object. This forms a "prototype chain". 
⁡
        * When a property is accessed, JavaScript searches up this chain until it's found or the chain ends (at null). 

        • unlike classical inheritance which uses classes and instances, JavaScript’s prototypal inheritance is more flexible because objects inherit directly from other objects. This allows dynamic inheritance and method sharing without the need for rigid class structures.


*/

// *--- 1. Using `Object.create()` ---

// This is the most direct way to create an object with a specific prototype.

const human = {
  isMortal: true,
  talk() {
    console.log(`My name is ${this.name}.`);
  }
};

const developer = Object.create(human);
developer.name = "Sanket"; // 'name' is a property on the developer object itself

developer.talk(); // Output: My name is Sanket. (talk() is inherited from human)
console.log(developer.isMortal); // Output: true (isMortal is inherited from human)

// *--- 2. Using Constructor Functions (The "old" way) ---

function Animal(name) {
  this.name = name;
}

// Methods are added to the prototype to be shared by all instances
Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
}

const myAnimal = new Animal("Leo");
myAnimal.speak(); // Output: Leo makes a noise.

// *--- 3. Using ES6 Classes (Modern Syntactic Sugar) ---
// This is the modern and preferred way to handle inheritance.

class Vehicle {
    constructor(wheels) {
        this.wheels = wheels;
    }
    drive() {
        console.log(`Driving on ${this.wheels} wheels.`);
    }
}

class Car extends Vehicle { // `extends` sets up the prototype chain
    constructor(brand) {
        super(4); // Calls the parent constructor (Vehicle)
        this.brand = brand;
    }

    // You can also add methods specific to Car
    honk() {
        console.log(`${this.brand} goes honk!`);
    }
}

const myCar = new Car("Toyota");
myCar.drive();

myCar.honk(); // Output: Toyota goes honk! (honk() is specific to Car)

