

// ## ⁡⁢⁣⁢𝗥͟𝗲͟𝘀͟𝘁 𝗢͟𝗽͟𝗲͟𝗿͟𝗮͟𝘁͟𝗼͟𝗿⁡ ##

/* 
    ⁡⁢⁣⁣2⁡⁢⁣⁣. 𝗥𝗲𝘀𝘁 𝗢𝗽𝗲𝗿𝗮𝘁𝗼𝗿⁡⁡
        - It's rest or collects multiple elements and condenses them into a single element
        - Used in function parameters
        - Used to merge multiple parameters into an array
        - Used to destructure arrays/objects 
*/

/* 
   ⁡⁣⁢⁣ Let's start what is rest operator in simple way.⁡

    --> so basically when we use ... (three dots) in function parameter it collects all the arguments passed to the function and condenses them into a single array.
    --> This is useful when we don't know how many arguments will be passed to the function.

    𝗘͟𝘅͟𝗮͟𝗺͟𝗽͟𝗹͟𝗲:

        ⁡⁢⁢⁢function sum(...numbers) {
            return numbers.reduce((acc, curr) => acc + curr, 0);
        }
        console.log(sum(1, 2, 3, 4));⁡ // Output: 10
        ⁡⁢⁢⁢console.log(sum(5, 10, 15));⁡   // Output: 30

    * In this example, the rest operator (...) collects all the arguments passed to the sum function into an array called numbers. We can then use array methods like reduce to perform operations on this array.

    ^ Rest operator can also be used in destructuring arrays and objects to collect the remaining elements into a new array or object.

    • ⁡⁣⁢⁣ 𝘄𝗵𝗮𝘁 𝘆𝗼𝘂 𝗺𝗲𝗮𝗻𝘀 𝗯𝘆 𝗱𝗲𝘀𝘁𝗿𝘂𝗰𝘁𝘂𝗿𝗶𝗻𝗴 𝘁𝗵𝗲 𝗮𝗿𝗿𝗮𝘆𝘀 𝗮𝗻𝗱 𝗼𝗯𝗷𝗲𝗰𝘁𝘀?⁡
        - Destructuring is a ⁡⁣⁣⁢convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays.⁡
        - It can be used in variable declarations, function parameters, and assignment expressions.

    > 𝗘͟𝘅͟𝗮͟𝗺͟𝗽͟𝗹͟𝗲 𝗼͟𝗳 𝗮͟𝗿͟𝗿͟𝗮͟𝘆 ⁡⁢⁣⁣𝗱͟𝗲͟𝘀͟𝘁͟𝗿͟𝘂͟𝗰͟𝘁͟𝘂͟𝗿͟𝗶͟𝗻͟𝗴⁡ 𝘄͟𝗶͟𝘁͟𝗵 𝗿͟𝗲͟𝘀͟𝘁 𝗼͟𝗽͟𝗲͟𝗿͟𝗮͟𝘁͟𝗼͟𝗿͟:
    
        ⁡⁢⁢⁢const [first, second, ...rest] = [1, 2, 3, 4, 5];
        console.log(first);⁡  // Output: 1
        ⁡⁢⁢⁢console.log(second);⁡ // Output: 2
        ⁡⁢⁢⁢console.log(rest);⁡   // Output: [3, 4, 5]

    * In this example, the first two elements of the array are assigned to the variables first and second, while the rest operator (...) collects the remaining elements into a new array called rest.

    > 𝗘͟𝘅͟𝗮͟𝗺͟𝗽͟𝗹͟𝗲 𝗼͟𝗳 𝗼͟𝗯͟𝗷͟𝗲͟𝗰͟𝘁 𝗱͟𝗲͟𝘀͟𝘁͟𝗿͟𝘂͟𝗰͟𝘁͟𝘂͟𝗿͟𝗶͟𝗻͟𝗴 𝘄͟𝗶͟𝘁͟𝗵 𝗿͟𝗲͟𝘀͟𝘁 𝗼͟𝗽͟𝗲͟𝗿͟𝗮͟𝘁͟𝗼͟𝗿͟:
        ⁡⁢⁢⁢const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
        console.log(a)⁡;  // Output: 1
        ⁡⁢⁢⁢console.log(b)⁡; // Output: 2
        ⁡⁢⁢⁢console.log(rest)⁡;   // Output: { c: 3, d: 4 }

    * In this example, the properties a and b of the object are assigned to the variables a and b, while the rest operator (...) collects the remaining properties into a new object called rest.

    Overall, the rest operator is a powerful feature in JavaScript that allows us to handle variable numbers of arguments and extract values from arrays and objects in a concise and readable way.

    • ⁡⁣⁢⁣𝗖𝗮𝗻 𝘄𝗲 𝘂𝘀𝗲 𝗿𝗲𝘀𝘁 𝗼𝗽𝗲𝗿𝗮𝘁𝗼𝗿 𝘄𝗶𝘁𝗵 𝗼𝘁𝗵𝗲𝗿 𝗽𝗮𝗿𝗮𝗺𝗲𝘁𝗲𝗿𝘀 𝗶𝗻 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻?⁡

        - ⁡⁣⁣⁢Yes⁡, we can use rest operator with other parameters in function. However, the rest parameter must be the last parameter in the function definition.

    𝗘͟𝘅͟𝗮͟𝗺͟𝗽͟𝗹͟𝗲:
        ⁡⁢⁢⁢function greet(greeting, ...names) {
            names.forEach(name => {
                console.log(`${greeting}, ${name}!`);
            });
        }
        greet("Hello", "Alice", "Bob", "Charlie");⁡
        Output:
            Hello, Alice!
            Hello, Bob!
            Hello, Charlie!

    * In this example, the first parameter greeting is a regular parameter, while the rest operator (...) collects all the remaining arguments into an array called names. The function then greets each name with the specified greeting.

    • ⁡⁣⁢⁣𝗜𝘀 𝘁𝗵𝗲𝗿𝗲 𝗮𝗻𝘆 𝘂𝘀𝗲 𝗰𝗮𝘀𝗲 𝗼𝗳 𝗿𝗲𝘀𝘁 𝗼𝗽𝗲𝗿𝗮𝘁𝗼𝗿 𝗶𝗻 𝗿𝗲𝗮𝗹 𝘄𝗼𝗿𝗹𝗱 𝗮𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻?⁡
        - Yes, there are many use cases of rest operator in real world applications. Here are a few examples:

            1. Handling variable number of arguments in functions: Rest operator is commonly used in functions that need to handle a variable number of arguments, such as mathematical operations, string manipulations, and event handling.

            2. Merging arrays and objects: Rest operator can be used to merge multiple arrays or objects into a single array or object, making it easier to manage and manipulate data.

            3. Destructuring complex data structures: Rest operator can be used in destructuring assignments to extract specific values from complex data structures, such as nested arrays and objects.
            
            4. Creating flexible APIs: Rest operator can be used in API design to create flexible endpoints that can accept varying numbers of parameters, making it easier for developers to work with the API.

*/