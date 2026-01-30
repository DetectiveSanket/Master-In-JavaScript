
// #### 20 Interview Questions on JavaScript Concepts  ### //


//* 1) Tech Mahindra:- Analyze the given code and explain what it does.

/* 
    ⁡⁢⁢⁢const obj = {
        a:1,
        c: () => {
            return this.a;
        }
    };

    console.log(obj.c());⁡

    output: undefined
    Explanation: The arrow function does not have its own 'this' context, so 'this.a' refers to the global context where 'a' is not defined, resulting in 'undefined'.'this' value is lexically inherited from the surrounding code, which in this case is the global scope.which is point to parent scope


    ⁡⁢⁢⁢console.log(obj.c.call({a:1}))⁡
 
    output: undefined
    Explanation: Even when using 'call' to set the context, arrow functions do not bind 'this', so it still refers to the global context, resulting in 'undefined'.
 */

//* 2) Walmart:- What will be the output of the following code snippet?

/* 
    ⁡⁢⁢⁢const one ="😂";

    const obj = {
        ['one']: "😊",
        [one]: "😍"  // 😂 <- key : 😍 <- value
    }

    console.log(obj.one)⁡

    output: 😊
    Explanation: Here we are uses dynamic property names in the object. The first property is named 'one' (a string), and the second property uses the value of the variable 'one', which is '😂'. Therefore, obj.one accesses the first property, resulting in '😊'.
    
    ⁡⁢⁢⁢console.log(obj)⁡ // { one: '😊', '😂': '😍' }
*/

//* 3) Zapto
/* 
    ⁡⁢⁢⁢var magic = 1;
    function magic() {
        console.log("😩")
    };

    magic();⁡

     output: TypeError: magic is not a function
     Explanation: In JavaScript, function declarations are hoisted above variable declarations. However, when a variable and a function share the same name, the variable declaration takes precedence during hoisting. As a result, 'magic' is treated as a variable that is initially undefined, leading to a TypeError when attempting to call it as a function.

    ⁡⁢⁢⁢console.log(magic);⁡ // output: 1
     Explanation: After the initial hoisting and assignment, 'magic' is assigned the value 1. Therefore, logging 'magic' outputs 1.

*/

//* 4) Walmart:- What will be the output of the following code snippet?
/* 
    const users = {
        frontendMaster:{},
        rahul:{}
    };
    let name = 'rahul';

    if(users[name]) {
        console.log("User found");
    } else {
        console.log("User not found");
    }

     output: User found
     Explanation: The code checks if the 'users' object has a property that matches the value of the 'name' variable, which is 'rahul'. Since 'users' does contain a property named 'rahul', the condition evaluates to true, and "User found" is logged to the console.

     to fix this
    if(users.hasOwnProperty(name)) { 
        console.log("User found");
    } else {
        console.log("User not found");
    }

 */

//* 5) Slit the string with comma and semicolon both
/* 
    ⁡⁢⁢⁢const list = "apple,banana;grape,orange;kiwi";

    const result1 = list.split(",");
    console.log(result1) // Output: [ 'apple', 'banana;grape', 'orange;kiwi' ]

    const result2 = list.split(/[,;]/); 
    console.log(result2) // Output: [ 'apple', 'banana', 'grape', 'orange', 'kiwi' ]⁡

    ^> Explanation: we can pass regular expression in split. The regular expression /[,;]/ matches both commas and semicolons, allowing the split method to separate the string at either delimiter.

 */


//* 6) Guest the output
/* 
    ⁡⁢⁢⁢let str = 'JS';
    JSON.stringify(str) === str;⁡
    
    output: false
     ^> Explanation: JSON.stringify(str) converts the string 'JS' into a JSON string format, which includes quotes around it, resulting in '"JS"'. Therefore, the comparison between '"JS"' and 'JS' evaluates to false.

 */


//* 7) Guest the output
/* 
    function text(a,a) { // a = 1 , a = undefined and second a will overwrite first a
        console.log(a);
    }
    text(1);  -- undefined
    
    OUTPUT:- undefined
    ^> Explanation: In JavaScript, when a function has multiple parameters with the same name, the last parameter takes precedence. In this case, the second 'a' parameter is undefined because no value is passed for it when calling text(1). Therefore, when console.log(a) is executed, it logs undefined.
    
    text(1,2); -- 2 >> a: 1 , a:2 second a will overwrite first a
*/