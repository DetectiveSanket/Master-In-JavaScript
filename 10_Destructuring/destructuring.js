
/* 
    Q)⁡⁢⁣⁣ 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗗𝗲𝘀𝘁𝗿𝘂𝗰𝘁𝘂𝗿𝗶𝗻𝗴 𝗶𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁?⁡
        - Destructuring in JavaScript is a ⁡⁣⁣⁢𝗰𝗼𝗻𝘃𝗲𝗻𝗶𝗲𝗻𝘁 𝘄𝗮𝘆 𝘁𝗼 𝗲𝘅𝘁𝗿𝗮𝗰𝘁 𝘃𝗮𝗹𝘂𝗲𝘀 𝗳𝗿𝗼𝗺 𝗮𝗿𝗿𝗮𝘆𝘀 𝗼𝗿 𝗽𝗿𝗼𝗽𝗲𝗿𝘁𝗶𝗲𝘀 𝗳𝗿𝗼𝗺 𝗼𝗯𝗷𝗲𝗰𝘁𝘀 𝗮𝗻𝗱 𝗮𝘀𝘀𝗶𝗴𝗻 𝘁𝗵𝗲𝗺 𝘁𝗼 𝘃𝗮𝗿𝗶𝗮𝗯𝗹𝗲𝘀⁡. 

        - It allows you to unpack values from arrays or properties from objects into distinct variables in a more concise and readable manner.

        -

*/
    // Example of Object Destructuring:
    const ab = {
        name: "Sanket",
        age: 24,
        city: "Pune"
    }

    const {name , age , city} = ab;
        console.log(name);
        console.log(age);
        console.log(city);

    const {name: fullName , age: years} = ab;
        console.log(fullName);
        console.log(years);

    // Example of Array Destructuring:
    const numbers = [1, 2, 3, 4, 5];
    console.log("numbers: " , numbers);
    console.log("\n");

    const [first, second, ...rest] = numbers; // Array destructuring
    console.log("first: " , first); // Output: 1
    console.log("second: " , second); // Output: 2
    console.log("rest: " , rest); // Output: [3, 4, 5]

    // Destructuring can also be used in function parameters:
    function greet({ name, age }) {
        console.log(`Hello, my name is ${name} and I am ${age} years old.`);
    }
    greet(person); // Output: Hello, my name is John and I am 30 years old.

    // Destructuring can also be used to swap variables:
    let a = 1;
    let b = 2;
    console.log("Before swap: a =", a, ", b =", b);
    [a, b] = [b, a];
    console.log("After swap: a =", a, ", b =", b);

    // Destructuring key uses;
    // 1. Extracting values from objects and arrays
    // 2. Assigning default values
    // 3. Renaming variables
    // 4. Nested destructuring


    // IMPORTANT:--
    let array = [1, 2, 3, 4, 5];
    console.log("array: " , array);

    const {2: c, 3: d, ...other} = array; // Array destructuring with renaming
    console.log("c: " , c);
    console.log("d: " , d);
    console.log("other: " , other);
