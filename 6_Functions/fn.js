
/* 
    # ⁡⁢⁣⁣𝗧𝘆𝗽𝗲 𝗼𝗳 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗶𝗻 𝗝𝘀⁡
        ⁡⁣⁢⁣- 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗗𝗲𝗰𝗹𝗮𝗿𝗮𝘁𝗶𝗼𝗻
        - 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗘𝘅𝗽𝗿𝗲𝘀𝘀𝗶𝗼𝗻
        - 𝗔𝗿𝗿𝗼𝘄 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻
        - 𝗜𝗜𝗙𝗘 (𝗜𝗺𝗺𝗲𝗱𝗶𝗮𝘁𝗲𝗹𝘆 𝗜𝗻𝘃𝗼𝗸𝗲𝗱 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗘𝘅𝗽𝗿𝗲𝘀𝘀𝗶𝗼𝗻) 
        - 𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗼𝗿 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻⁡

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
            const sayHello = function(name) { //^ Anonymous function expression
                return `Hello, ${name}!`;
            };

            const namedSayHello = function greet(name) { //^ Named function expression -> (not anonymous)...
                return `Hello, ${name}!`;
            };

            console.log(sayHello("Alice")); // works fine
            console.log(namedSayHello("Bob")); // works fine



// ⁡⁢⁣⁣𝗔͟𝗿͟𝗿͟𝗼͟𝘄 𝗙͟𝘂͟𝗻͟𝗰͟𝘁͟𝗶͟𝗼͟𝗻 ͟⁡       

   /* 
        • ⁡⁣⁢⁣Arrow functions are a shorter, cleaner way to write functions in JavaScript (introduced in ES6). Instead of using the function keyword, they use a fat arrow =>..⁡

        • Think of arrow functions as: "Regular functions, but with a shortcut syntax that's great for quick callbacks and one-liners.

        ⁡⁢⁣⁣𝗤𝟭: 𝗪𝗵𝗮𝘁'𝘀 𝘁𝗵𝗲 𝗺𝗮𝗶𝗻 𝗱𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝗰𝗲 𝗶𝗻 𝘀𝘆𝗻𝘁𝗮𝘅 𝗯𝗲𝘁𝘄𝗲𝗲𝗻 𝗻𝗼𝗿𝗺𝗮𝗹 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗮𝗻𝗱 𝗮𝗿𝗿𝗼𝘄 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻 ?⁡⁡
        A: Regular functions use the ⁡⁣⁣⁢function keyword⁡, arrow functions use ⁡⁣⁣⁢=>.⁡

            ex- 
            * Regular
                function add(a, b) { return a + b; }
                
                * Arrow
                const add = (a, b) => a + b;
        
        ⁡⁣⁢⁣⁡⁢⁣⁣𝗤𝟮: 𝗪𝗵𝗶𝗰𝗵 𝗼𝗻𝗲 𝗶𝘀 𝗳𝗮𝘀𝘁𝗲𝗿 𝘁𝗼 𝘄𝗿𝗶𝘁𝗲?⁡
        A: Arrow functions! They're much shorter, especially for simple operations.   

            ex- 
                * Regular - 3 lines
                function double(x) {
                    return x * 2;
                }
                
                * Arrow - 1 line
                const double = x => x * 2;     

        ⁡⁢⁣⁣𝗤𝟯: 𝗪𝗵𝗲𝗻 𝗰𝗮𝗻 𝗜 𝘀𝗸𝗶𝗽 𝘁𝗵𝗲 𝗰𝘂𝗿𝗹𝘆 𝗯𝗿𝗮𝗰𝗲𝘀 {}?⁡
        A: Only when you have ⁡⁣⁣⁢one line of code⁡ that you want to return.   
        
            ex-
                * This works (one line, auto-return)
                const square = x => x * x;
                
                * This needs braces (multiple lines)
                const square = x => {
                    console.log("Calculating...");
                    return x * x;
                };

        ⁡⁢⁣⁣𝗤𝟰: 𝗪𝗵𝗲𝗻 𝗰𝗮𝗻 𝗜 𝘀𝗸𝗶𝗽 𝘁𝗵𝗲 𝗽𝗮𝗿𝗲𝗻𝘁𝗵𝗲𝘀𝗲𝘀 () 𝗮𝗿𝗼𝘂𝗻𝗱 𝗽𝗮𝗿𝗮𝗺𝗲𝘁𝗲𝗿𝘀?
        A: Only when you have exactly one parameter.

            ex-
                * Skip parentheses with 1 parameter
                ⁡⁢⁢⁢const getName = name => `Hello, ${name}`;⁡
                
                * Need parentheses with 0 or 2+ parameters
                ⁡⁢⁢⁢const getName = () => "Hello";
                const add = (a, b) => a + b;⁡

        ⁡⁣⁢⁣𝗤𝟱: 𝗪𝗵𝗮𝘁 𝗮𝗯𝗼𝘂𝘁 𝗵𝗼𝗶𝘀𝘁𝗶𝗻𝗴? 𝗖𝗮𝗻 𝗜 𝗰𝗮𝗹𝗹 𝘁𝗵𝗲𝗺 𝗯𝗲𝗳𝗼𝗿𝗲 𝘁𝗵𝗲𝘆'𝗿𝗲 𝗱𝗲𝗳𝗶𝗻𝗲𝗱?⁡
        A: NO. Arrow functions are NOT hoisted.        

            ex-
                * ❌ This will FAIL
                console.log(greet("John")); // ReferenceError!
                const greet = (name) => `Hello, ${name}`;
                
                * ✅ This works fine
                function greet(name) {
                    return `Hello, ${name}`;
                }
                console.log(greet("John")); // Works! (hoisted)

        ⁡⁢⁣⁣𝗤𝟲: 𝗪𝗵𝗮𝘁'𝘀 𝘁𝗵𝗶𝘀 "𝘁𝗵𝗶𝘀" 𝗸𝗲𝘆𝘄𝗼𝗿𝗱 𝗶𝘀𝘀𝘂𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲 𝘁𝗮𝗹𝗸𝘀 𝗮𝗯𝗼𝘂𝘁?⁡
        A: Arrow functions don't have their own this - they take it from the surrounding scope.

            ex-
            * Regular function - has its own 'this'
            const user = {
                name: "Alice",
                greet: function() {
                    console.log(this.name); // 'this' = user object ✅
                }
            };
            
            * Arrow function - takes 'this' from outer scope
            const user = {
                name: "Alice",
                greet: () => {
                    console.log(this.name); // 'this' = window/global ❌
                }
            };

        ----------------------------

        ✅ ⁡⁢⁣⁣When to Use Each?⁡

            > Use Regular Functions when:
                - You need hoisting
                - You need your own this (like in object methods)
                - You want to use new with constructor functions
                - Use Arrow Functions when:
            
            > You want cleaner, shorter code
                - Using callbacks (.map(), .filter(), etc.)
                - You want inherited this behavior
                - Writing simple, one-liner operations    
   */

        //* Regular function
        function greet(name) {
            return `Hello, ${name}!`;
        }

        //* Arrow function (same thing, shorter)
        const arrowFunction = (name) => {
            return `Hello, ${name}!`;
        };

        const withoutParameter = () => {
            return "Hello , i am without parameter"
        }

        //* Arrow function (one-liner - even shorter!)
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
        
       # ⁡⁢⁣⁣𝗪𝗵𝘆 𝗨𝘀𝗲 𝗖𝗮𝗹𝗹𝗯𝗮𝗰𝗸𝘀?⁡
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
        - A higher-order function is a function ⁡⁣⁣⁢that takes another function as an argument or returns a function as its result.⁡ It can be used to create more abstract and reusable code. For example, the map method is a higher-order function because it takes a callback function as an argument.

        - A callback function is a function ⁡⁣⁣⁢that is passed as an argument to another function and is executed after some operation has been completed.⁡ It is often used for handling asynchronous operations, such as fetching data from an API or responding to user events.   
            
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