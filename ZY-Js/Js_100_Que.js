/* 
 ⁡⁢⁣⁣ 1. What is JavaScript ?⁡
    * JavaScript (JS) is a lightweight, high-level programming language primarily used to make web pages interactive and dynamic. 
    - also used on servers using Node.js.
    - Example: button click, form validation, showing/hiding content, animations.
    - It works with:
        HTML = structure, CSS = design, JavaScript = action.
    - JavaScript can run in the browser and also on the server using Node.js.

  ⁡⁢⁣⁣𝟮) 𝗪𝗵𝗮𝘁 𝗮𝗿𝗲 𝘁𝗵𝗲 𝗱𝗮𝘁𝗮 𝘁𝘆𝗽𝗲𝘀 𝗶𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁?⁡
    * In js , data types means the type of value a variable can store.
        for ex: variable may store number, string, boolean, object, etc.

        - Data types tell us what kind of daa we are working with.   

        • Two main type
            ^1) Primitive data types: These are basic data types that are not objects and have no methods. They include:
            * Basic data types that store a single value.
            * Variables store the actual value directly.
            * Immutable: the original value cannot be changed.
            * Copies contain independent values.

                - String: Represents text. Example: "Hello, World!"
                - Number: Represents both integer and floating-point numbers. Example: 42, 3.14
                - Boolean: Represents true or false values. Example: true, false
                - Null: Represents the intentional absence of any object value. Example: null
                - Undefined: Represents a variable that has been declared but not assigned a value. Example: undefined
                - Symbol: Represents a unique identifier. Example: Symbol('id')
                - BigInt: Represents integers with arbitrary precision. Example: 9007199254740991n

            ^2) Non-primitive data types: These are complex data types that can store collections of values and more complex entities. They include:
             * Variables store a reference to the object’s location.
             * Mutable: properties or elements can be changed.
             * Copies may point to the same object.

                - Object: Represents a collection of key-value pairs. Example: { name: "Alice", age: 30 }
                - Array: Represents an ordered list of values. Example: [1, 2, 3, 4, 5]
                - Function: Represents a reusable block of code that performs a specific task. Example: function greet() { console.log("Hello!"); }
*/

// !-------------------------------------3. Next Question --------------------------------

// ⁡⁢⁣⁣3. What is the difference between null and undefined?⁡u

// *--- 1. Basic Definition ---
// `null` is an explicit assignment. It means "no value".
let user = null;
console.log("Explicitly assigned null:", user); // null

// `undefined` means a variable has been declared but not yet assigned a value.
let city;
console.log("Implicitly undefined variable:", city); // undefined

// *--- 2. Typeof ---
console.log("Type of null:", typeof null);      // "object" (This is a famous historical bug in JavaScript)
console.log("Type of undefined:", typeof undefined); // "undefined"

// *--- 3. Comparison ---
// Loose equality (==) considers them equal because it only checks the value.
console.log("null == undefined:", null == undefined); // true

// Strict equality (===) considers them different because it checks type and value.
console.log("null === undefined:", null === undefined); // false
 
// *--- 4. Mathematical Operations ---
// `null` is treated ⁡⁣⁣⁢as 0⁡ in numeric operations. (falsy value)
console.log("10 + null:", 10 + null); // 10

// `undefined` becomes ⁡⁣⁣⁢NaN⁡ (Not a Number) in numeric operations.
console.log("10 + undefined:", 10 + undefined); // NaN

// * ---- Practical example --------
// A function that doesn't return anything implicitly returns undefined.
function doNothing() { /* No return statement */ }
console.log("Function with no return:", doNothing()); // undefined

// A function can explicitly return null to indicate no result was found.
function findUser(name) { return name === "Admin" ? { name: "Admin" } : null; }
console.log("Function returning null:", findUser("John")); // null

/* 
```javascript
console.log("6" == 6); // true
```

`==` is called **loose equality**. It performs **type conversion** before comparing.

Here:

- `"6"` is a **string**
- `6` is a **number**
- JavaScript converts the string `"6"` into the number `6`
- Then it compares:

```javascript
Number("6") == 6
6 == 6 // true
```

So, in this example, **the string is converted into a number**, not the number into a string.

Use `===` to avoid automatic conversion:

```javascript
console.log("6" === 6); // false
```

`===` checks both **value and data type**.
 */

// !-------------------------------------4 Next Question--------------------------------

// ⁡⁢⁣⁣4. Explain the concept of hoisting in JavaScript.⁡

// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope before code execution. Importantly, only the declaration is hoisted, not the initialization.

// *--- 1. Hoisting with `var` ---
// `var` declarations are hoisted and initialized with `undefined`.

console.log(myVar); // Outputs: undefined
var myVar = "Hello, Hoisting!";
console.log(myVar); // Outputs: "Hello, Hoisting!"

// ⁡⁣⁢⁣The engine interprets the above as:
// var myVar;
// console.log(myVar);
// myVar = "Hello, Hoisting!";
// console.log(myVar)⁡;


// *--- 2. Hoisting with `let` and `const` (⁡⁣⁣⁢Temporal Dead Zone - TDZ⁡) ---
// `let` and `const` are hoisted but not initialized. Accessing them before the declaration results in a ReferenceError. This is the TDZ.

try {
  console.log(myLet); // This line will throw a ReferenceError
} catch (e) {
  console.log("error -> ", e.message); // "Cannot access 'myLet' before initialization"
}
let myLet = "No more TDZ!";
console.log(myLet); // "No more TDZ!"


// *--- 3. Function Hoisting ---

//& a) Function Declarations are fully hoisted (name and body).
sayHello(); // Outputs: "Hello from a function declaration!"
function sayHello() {
  console.log("Hello from a function declaration!");
}

//&  b) Function Expressions are not fully hoisted. The variable is hoisted
// according to its keyword (`var`, `let`, `const`), but the function body is not.

try {
  sayGoodbye(); // This will throw a TypeError
} catch (e) {
  console.log(e.message); // "sayGoodbye is not a function"
}
var sayGoodbye = function() {
  console.log("Goodbye!");
};

// Now this works because the function is defined after the call
sayGoodbye(); // "Goodbye!"

// !-------------------------------------7. Next Question--------------------------------

// ⁡⁢⁣⁣7. Explain the concept of prototypal inheritance in JavaScript.⁡

/* 
    • Prototypal inheritance is a mechanism where objects can inherit properties and methods from other objects.
    • Each object has a hidden `[[Prototype]]` property that links to another object. This forms a "prototype chain". 
    • When a property is accessed, JavaScript searches up this chain until it's found or the chain ends (at null). 
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

developer.talk(); // "My name is Sanket." (talk() is inherited from human)
console.log(developer.isMortal); // true (isMortal is inherited from human)

// *--- 2. Using Constructor Functions (The "old" way) ---

function Animal(name) {
  this.name = name;
}

// Methods are added to the prototype to be shared by all instances
Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
}

const myAnimal = new Animal("Leo");
myAnimal.speak(); // "Leo makes a noise."

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
}

const myCar = new Car("Tesla");
myCar.drive(); // "Driving on 4 wheels." (Inherited from Vehicle)
console.log(myCar.brand); // "Tesla"
