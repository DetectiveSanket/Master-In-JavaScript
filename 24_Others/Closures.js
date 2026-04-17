
/* 
    ⁡⁢⁣⁣𝗤) 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗖𝗹𝗼𝘀𝘂𝗿𝗲 𝗶𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁?⁡

        - Closure is a fundamental concept in JavaScript that allows a function to access variables from its outer (enclosing) scope, even after the outer function has finished executing. 

        - In other words, a closure gives you access to an outer function's scope from an inner function.

        - In Another word - ⁡⁣⁢⁣Function inside another function and the inner function accessing variables from its outer function even after the outer function has finished executing.
        ⁡


    ⁡⁢⁣⁣𝗤) 𝗪𝗵𝗮𝘁 𝗮𝗿𝗲 𝘁𝗵𝗲 𝗯𝗲𝗻𝗲𝗳𝗶𝘁𝘀 𝗼𝗳 𝘂𝘀𝗶𝗻𝗴 𝗰𝗹𝗼𝘀𝘂𝗿𝗲𝘀 𝗶𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁?⁡
        - Data Privacy: Closures allow you to create private variables that cannot be accessed from outside the function, providing a way to encapsulate data and protect it from unintended modifications.

        - Function Factories: Closures enable the creation of function factories, which are functions that generate other functions with specific behavior based on the parameters passed to the outer function.

        - Maintaining State: Closures can be used to maintain state between function calls. This is particularly useful in scenarios like event handlers or asynchronous programming, where you want to preserve certain values across multiple invocations.

        - Module Pattern: Closures are often used in the module pattern to create private and public members, allowing for better organization and encapsulation of code.

        - Memory Efficiency: Closures can help reduce memory usage by allowing you to create functions that share common data without needing to duplicate it.


    ⁡⁢⁣⁣𝗤) 𝗖𝗮𝗻 𝘆𝗼𝘂 𝗲𝘅𝗽𝗹𝗮𝗶𝗻 𝗵𝗼𝘄 𝗰𝗹𝗼𝘀𝘂𝗿𝗲𝘀 𝘄𝗼𝗿𝗸 𝗶𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁? 𝗖𝗼𝘂𝗹𝗱 𝘆𝗼𝘂 𝗮𝗹𝘀𝗼 𝗴𝗶𝘃𝗲 𝗮 𝘀𝗶𝗺𝗽𝗹𝗲 𝗲𝘅𝗮𝗺𝗽𝗹𝗲 𝗼𝗳 𝗮 𝗰𝗹𝗼𝘀𝘂𝗿𝗲 𝗮𝗻𝗱 𝗱𝗲𝘀𝗰𝗿𝗶𝗯𝗲 𝗮 𝗽𝗿𝗮𝗰𝘁𝗶𝗰𝗮𝗹 𝘂𝘀𝗲 𝗰𝗮𝘀𝗲 𝘄𝗵𝗲𝗿𝗲 𝗰𝗹𝗼𝘀𝘂𝗿𝗲𝘀 𝗮𝗿𝗲 𝗵𝗲𝗹𝗽𝗳𝘂𝗹? ⁡  
        - Closures work by creating a scope chain that allows the inner function to access variables from its outer function. When the outer function is invoked, it creates a new execution context, and the inner function retains access to the variables of that context even after the outer function has completed.

*/

// ⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝗼𝗳 𝗮 𝗰𝗹𝗼𝘀𝘂𝗿𝗲 𝗶𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁⁡

function outerFunction() {
    let count = 0; // This variable is part of the outer function's scope

    function innerFunction() { // This is the inner function, which forms a closure
        count++;
        console.log(count); // It can access and modify the 'count' variable
    }

    return innerFunction; // The outer function returns the inner function
}

const myClosure = outerFunction(); // myClosure is now a reference to the inner function
myClosure(); // Output: 1
myClosure(); // Output: 2
myClosure(); // Output: 3

// 