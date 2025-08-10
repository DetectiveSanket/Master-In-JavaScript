
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

            const sayHello = function(name) { // Anonymous function expression
                return `Hello, ${name}!`;
            };

            const namedSayHello = function greet(name) { // Named function expression
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
    */

        const hello = async () => {
            const result = await fetch("https://api.example.com/data");
            const data = await result.json();
            console.log(data);
            return data; // Returns the fetched data
        }

        const ans = await hello();
        console.log(ans); // Output: Result of fetch

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
