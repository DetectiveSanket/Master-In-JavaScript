
//# ⁡⁢⁣⁣𝗗𝗮𝘁𝗮 𝗧𝘆𝗽𝗲𝘀 𝗶𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁⁡

// JavaScript has several built-in data types. Here are the most commonly used ones:

//1. ⁡⁣⁢⁣𝗣𝗿𝗶𝗺𝗶𝘁𝗶𝘃𝗲𝘀 𝗱𝗮𝘁𝗮⁡
 
let x = 42;               // Number
let y = "Hello, World!"; // String
let isActive = true;  // Boolean
let n = null;          // Null
let u;                // Undefined
let sym = Symbol('id'); // Symbol
let bigIntNum = 9007199254740991n; // BigInt

//⁡⁣⁢⁣𝟮. 𝗡𝗼𝗻-𝗽𝗿𝗶𝗺𝗶𝘁𝗶𝘃𝗲 𝗱𝗮𝘁𝗮⁡
let arr = [1, 2, 3];            // Array
let obj = { name: "Alice", age: 25 }; // Object
let func = function() { return "Hello"; }; // Function

//⁡⁣⁢⁣𝟯. 𝗦𝗽𝗲𝗰𝗶𝗮𝗹 𝗱𝗮𝘁𝗮 𝘁𝘆𝗽𝗲𝘀⁡
let date = new Date(); // Date
let regex = /ab+c/;   // Regular Expression

// ⁡⁣⁢⁣You can check the type of a variable using the `typeof` operator:⁡
console.log(typeof x); // "number"
console.log(typeof y); // "string"
console.log(typeof isActive); // "boolean"
console.log(typeof n); // "object" (this is a known quirk in JavaScript)
console.log(typeof u); // "undefined"
console.log(typeof sym); // "symbol"
console.log(typeof bigIntNum); // "bigint"
console.log(typeof arr); // "object"
console.log(typeof obj); // "object"
console.log(typeof func); // "function"
console.log(typeof date); // "object"
console.log(typeof regex); // "object"



//⁡⁣⁣⁢# 𝗘𝘅𝗲𝗿𝗰𝗶𝘀𝗲𝘀⁡
    //* 1. Create a variable of each data type and log their types using `typeof`.

    //* 2. Create an array containing different data types and log the type of each element.

        const mixedArray = [42, "Hello", true, null, undefined, Symbol('id'), 9007199254740991n, [1, 2, 3], { name: "Alice" }];

        console.log("Types of elements in mixedArray:");    
        console.log("Type of mixedArray:", typeof mixedArray);
        mixedArray.forEach(element => {
            console.log(typeof element);    
        });



    //* 3. Write a function that takes a variable as input and returns its data type.

        console.log("\n \nData types using tellType function:");
        function tellType(input) {
           return typeof input;
        }

        let getType = 3;
        console.log(`The type of ${getType} is:`, tellType(getType));

        getType = "Hello";
        console.log(`The type of "${getType}" is:`, tellType(getType));


    //* 4. Create an object with properties of different data types and log the type of each property.

        const person = {
            name: "John",          // String
            age: 30,               // Number
            isEmployed: true,      // Boolean
        }

        console.log("\n \nData types of object properties:");
        for(let key in person) {
            console.log(`The type of property ${key} is:`, tellType(person[key]));
        }
        console.log(`Printing all the key value of object is:`, person);
        console.log(`Type of person object is:`, tellType(person));
        console.log("Type of person.name is:", tellType(person.name));
        console.log("One key value in obj" , person.age);

    //* 5. Experiment with `null` and `undefined` to understand their differences.

        let a = null;
        let b;
        console.log("\n \nExperimenting with null and undefined:");
        console.log("Value of a (null):", a);
        console.log("Type of a (null):", tellType(a));
        console.log("Value of b (undefined):", b);
        console.log("Type of b (undefined):", tellType(b));