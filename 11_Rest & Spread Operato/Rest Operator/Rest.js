

// ## Rest Operator ##

/* 
    2. Rest Operator
        - It's rest or collects multiple elements and condenses them into a single element
        - Used in function parameters
        - Used to merge multiple parameters into an array
        - Used to destructure arrays/objects 
*/

/* 
    Let's start what is rest operator in simple way.
    --> so basically when we use ... (three dots) in function parameter it collects all the arguments passed to the function and condenses them into a single array.
    --> This is useful when we don't know how many arguments will be passed to the function.

    Example:
        function sum(...numbers) {
            return numbers.reduce((acc, curr) => acc + curr, 0);
        }
        console.log(sum(1, 2, 3, 4)); // Output: 10
        console.log(sum(5, 10, 15));   // Output: 30

    In this example, the rest operator (...) collects all the arguments passed to the sum function into an array called numbers. We can then use array methods like reduce to perform operations on this array.

    Rest operator can also be used in destructuring arrays and objects to collect the remaining elements into a new array or object.

    •  what you means by destructuring the arrays and objects?
        - Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays.
        - It can be used in variable declarations, function parameters, and assignment expressions.
    Example of array destructuring with rest operator:
        const [first, second, ...rest] = [1, 2, 3, 4, 5];
        console.log(first);  // Output: 1
        console.log(second); // Output: 2
        console.log(rest);   // Output: [3, 4, 5]

    In this example, the first two elements of the array are assigned to the variables first and second, while the rest operator (...) collects the remaining elements into a new array called rest.

    Example of object destructuring with rest operator:
        const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
        console.log(a);  // Output: 1
        console.log(b); // Output: 2
        console.log(rest);   // Output: { c: 3, d: 4 }
    In this example, the properties a and b of the object are assigned to the variables a and b, while the rest operator (...) collects the remaining properties into a new object called rest.

    Overall, the rest operator is a powerful feature in JavaScript that allows us to handle variable numbers of arguments and extract values from arrays and objects in a concise and readable way.

    • Can we use rest operator with other parameters in function?
        - Yes, we can use rest operator with other parameters in function. However, the rest parameter must be the last parameter in the function definition.
    Example:
        function greet(greeting, ...names) {
            names.forEach(name => {
                console.log(`${greeting}, ${name}!`);
            });
        }
        greet("Hello", "Alice", "Bob", "Charlie");
        Output:
        Hello, Alice!
        Hello, Bob!
        Hello, Charlie!

    In this example, the first parameter greeting is a regular parameter, while the rest operator (...) collects all the remaining arguments into an array called names. The function then greets each name with the specified greeting.

    • Is there any use case of rest operator in real world application?
        - Yes, there are many use cases of rest operator in real world applications. Here are a few examples:
            1. Handling variable number of arguments in functions: Rest operator is commonly used in functions that need to handle a variable number of arguments, such as mathematical operations, string manipulations, and event handling.
            2. Merging arrays and objects: Rest operator can be used to merge multiple arrays or objects into a single array or object, making it easier to manage and manipulate data.
            3. Destructuring complex data structures: Rest operator can be used in destructuring assignments to extract specific values from complex data structures, such as nested arrays and objects.
            4. Creating flexible APIs: Rest operator can be used in API design to create flexible endpoints that can accept varying numbers of parameters, making it easier for developers to work with the API.

*/