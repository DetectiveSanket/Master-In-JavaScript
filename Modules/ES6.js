//! ES6 Modules (modern JavaScript)
console.log("ES6 Modules Example");

//* Default export
import greet from './ES6Export.js';
console.log(greet("Sanket")); // Output: Hello, Sanket!

//* Importing named exports
import {add , sub} from './ES6Export.js';
console.log("Addition: " + add(5, 3)); // Output: 8
console.log(`Subtraction: ${sub(10, 5)}`); // Output: 5

//* Importing multiple named exports
import { multiply , divide } from './ES6Export.js';

console.log("Multiplication: " + multiply(4, 2)); // Output: 8
console.log(`Division: ${divide(10, 2)}`); // Output:

//* Importing with alias (remaining the same name)
import{sanket as good} from './ES6Export.js'; // here sanket is the name from exported file and good is the name we are using in this file
console.log(good()); // Output: Sanket
good(); // Output: Sanket

/* 
    ## ⁡⁢⁢⁢Note⁡: &# ⁡⁢⁣⁣ES6 Modules (ESM)⁡⁡
    - ⁡⁣⁢⁣ES6 Modules is a modern module system in JavaScript⁡.

        - Use `import` to bring in modules and `export` to expose functionality.
        - You can only once use `export default` in a file, which allows you to export a single item as the main functionality of the module.
        - You can have multiple named exports in a file.
        - You can also have a ⁡⁣⁣⁢default export⁡, which is the main functionality of the module.
        - Named exports can be imported with their original names or aliased to different names.
        - ES6 modules are static, meaning they are resolved at compile time, allowing for better optimization and tree-shaking.
*/