
/* 
    •  type of function in Js
        - Function Declaration
        - Function Expression
        - Arrow Function
        - IIFE (Immediately Invoked Function Expression) 
        - Generator Function

        # sub types
            - Async Function
            - Callback Function
            - Higher-Order Function
            - Recursive Function
            - Callback Hell
            - Promise Function

*/

// ⁡⁢⁣⁣function declaration⁡
    /* 
        ⁡⁣⁢⁣• These are defined using the function keyword, followed by a name, parameters in parentheses, and the function body in curly braces. They are ⁡⁣⁣⁢hoisted⁡, ⁡⁣⁢⁣meaning they can be called before their declaration in the code.⁡
    */

        // call before declaration
        console.log(great("sanket")); // works fine
        function great(name) { // great is named or anonymous function
            return `Hello ${name}`;
        }

        console.log(great("John")); // works fine

// ⁡⁢⁣⁣function expression⁡
    /* 
        • ⁡⁣⁢⁣These are functions assigned to a variable. 
        • ⁡⁣⁢⁣Not hoisted, so they can't be called before they're defined⁡
        ⁡⁣⁢⁣• Can be anonymous (no name) or have a name
        • Useful for creating functions conditionally⁡
    */
            // console.log(sayHello("sanket")) // ReferenceError: Cannot access 'sayHello' before initialization
            const sayHello = function(name) { // Anonymous function expression
                return `Hello, ${name}!`;
            };

            const namedSayHello = function greet(name) { // Named function expression -> (not anonymous)...
                return `Hello, ${name}!`;
            };

            console.log(sayHello("Alice")); // works fine
            console.log(namedSayHello("Bob")); // works fine



// ⁡⁢⁣⁣Arrow Function ⁡       
   /* 
        • ⁡⁣⁢⁣A concise syntax for writing function expressions, introduced in ES6. They have lexical this binding, meaning this refers to the this of the surrounding scope. They are often used for shorter, single-line functions or as callbacks.⁡
   */

        const arrowFunction = (name) => {
            return `Hello, ${name}!`;
        };

        const withoutParameter = () => {
            return "Hello , i am without parameter"
        }

        const singleLineArrowFunction = name => `Hello, ${name}!`; // Implicit return

        const anotherSingleLineArrowFunction = () => `Hello, I am another single line arrow function!`;

        console.log(arrowFunction("Charlie")); // works fine
        console.log(withoutParameter()); // works fine
        console.log(singleLineArrowFunction("David")); // works fine
        console.log(anotherSingleLineArrowFunction()); // works fine

// ⁡⁢⁣⁣Immediately Invoked Function Expressions (IIFEs)  
    /* 
        • ⁡⁣⁢⁣These are functions that are defined and executed immediately. They are often used to create a new scope and avoid polluting the global namespace.⁡

        ⁡⁣⁢⁣• Executes immediately after definition
        • Creates its own scope, which is useful for avoiding polluting the global namespace
        • Can be anonymous or have a name⁡
    */

        (function() {
            console.log("IIFE executed");
        })(); // () -> Immediately Invoked Function Expression

        const result = (function() { // stored in result variable
            // This IIFE returns a value
            const x = 10;
            const y = 20;
            return x + y; // The IIFE returns the sum of x and y
        })();

        console.log(result); // Output: 30 



//----------------------------------------------------------------------------------------------------

// - ⁡⁢⁣⁣Async Function⁡
    /* 
        • ⁡⁣⁢⁣These are functions that allow for asynchronous, non-blocking code execution. They are defined using the async keyword and can contain await expressions to pause execution until a Promise is resolved.⁡

        • An arrow function use => instead of function keyword.

        - Async functions always return a Promise. If the function returns a value, the Promise will be resolved with that value. If the function throws an error, the Promise will be rejected with that error.
         
         
    */

        const hello = async () => {
            const result = await fetch("https://api.example.com/data");
            const data = await result.json();
            console.log(data);
            return data; // Returns the fetched data
        }

        const ans = await hello();
        console.log(ans); // Output: Result of fetch

        //& __Uses `=>`__
            const greet = () => "Hello";

        
        //& If one parameter, brackets are optional
            const square = x => x * x;

        //&__If one line, `return` is automatic__
            const summ = (a, b) => a + b;
            
        //& __`this` behaves differently__
            // * Arrow function does __not__ have its own `this`
            // * It takes `this` from the surrounding scope
            

        async function fetchData() {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            return data;
        }



// ⁡⁢⁣⁣Higher-Order Function⁡
    /* 
        • ⁡⁣⁢⁡⁣⁢⁣These are functions that take other functions as arguments or return functions as their result. They are often used for callbacks, array methods (like map, filter, reduce), and function composition.⁡⁡
    */

        const numbers = [1, 2, 3, 4, 5];

        const doubled = numbers.map(num => num * 2);
        console.log(doubled); // Output: [2, 4, 6, 8, 10]

        const filtered = numbers.filter(num => num > 2);
        console.log(filtered); // Output: [3, 4, 5]

        const sum = numbers.reduce((acc, num) => acc + num, 0);
        console.log(sum); // Output: 15


// ⁡⁢⁣⁣𝗙𝗮𝗰𝘁𝗼𝗿𝘆 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻⁡
    /* 
        • ⁡⁣⁢⁣A factory function is a function that returns an object. It is a simple way to create objects without using classes or constructor functions.⁡

        • Factory functions can be used to create multiple instances of an object with similar properties and methods, without the need for a class. They are often used in JavaScript to create objects that share common behavior.
        
    */        
      
    function createPerson(name , age , city) {
        return {
            name : name,
            age : age,
            city : city
        };
    }    

    createPersonte("sanket" , 24 , "pune");

        
// ⁡⁢⁣⁣ Callback Function    ⁡
    /* 
        In JavaScript, functions are "first-class citizens." This means they can be treated like any other variable: they can be passed as arguments to other functions, returned from functions, and assigned to variables.

        ⁡⁣⁣⁢A callback function⁡ is simply a function that is passed as an ⁡⁣⁢⁣argument to another function⁡. The outer function can then "call back" this function at a later time to perform a specific task.

        This pattern is fundamental to JavaScript, especially for handling asynchronous operations.  
        
       # Why Use Callbacks?
        - JavaScript is single-threaded, meaning it can only do one thing at a time. If it has to wait for a long operation (like fetching data from a server, reading a file, or waiting for a timer), the entire program would freeze.

        - Callbacks allow you to start an operation and provide a function that will be executed once that operation completes, without blocking the main thread.
    */

        //todo: ------- Synchronous Callback Example

        //? This is our main function that accepts a callback
        function processUserInput(name, callback) {
            const greeting = `Hello, ${name}!`;
            // We "call back" the function that was passed in
            callback(greeting);
        }

        // This is our callback function
        function logGreeting(message) {
            console.log(message);
        }

        // We call processUserInput and pass logGreeting as the callback
        processUserInput('Alice', logGreeting);

        // Output:
        // Hello, Alice!

        //todo:- ----- Asynchronous Callback Example

        console.log("Program started.");

        // This function simulates fetching data from a server
        function fetchData(callback) {

            console.log("Fetching data... this will take 3 seconds.");
            // setTimeout simulates a network delay
            setTimeout(() => {
                const data = { id: 1, name: "John Doe" };
                console.log("Data has been fetched.");
                // The callback is executed only after the 3-second delay
                callback(data);
            }, 3000);
            
        }

        // We call fetchData and provide an anonymous function as the callback
        fetchData((data) => {
            console.log("Processing received data:");
            console.log(data);
        });

        console.log("Program continues to run while data is being fetched...");

        // Output:
        // Program started.
        // Fetching data... this will take 3 seconds.
        // Program continues to run while data is being fetched...
        // (after 3 seconds)
        // Data has been fetched.
        // Processing received data:
        // { id: 1, name: 'John Doe' }


/*
    ⁡⁢⁣⁣Q) 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗱𝗶𝗳𝗳 𝗯𝘄𝘁 𝗛𝗶𝗴𝗵𝗲𝗿-𝗢𝗿𝗱𝗲𝗿 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗮𝗻𝗱 𝗖𝗮𝗹𝗹𝗯𝗮𝗰𝗸 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻⁡
        - A higher-order function is a function that takes another function as an argument or returns a function as its result. It can be used to create more abstract and reusable code. For example, the map method is a higher-order function because it takes a callback function as an argument.

            - A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It is often used for handling asynchronous operations, such as fetching data from an API or responding to user events.   

            - ex:-
            
*/
            //• Higher-Order Function
            function higherOrderFunction(callback) {
                console.log("This is a higher-order function.");
                callback(); // Calling the callback function
            }
            higherOrderFunction(callbackFunction);

            //• Callback Function
            function callbackFunction() {
                console.log("This is a callback function.");
            }
           
            //Output:
            //This is a higher-order function.
            //This is a callback function.