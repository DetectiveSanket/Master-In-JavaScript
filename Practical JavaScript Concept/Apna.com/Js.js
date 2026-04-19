
/* 
    𝗤) 𝗖𝗮𝗻 𝘆𝗼𝘂 𝘁𝗲𝗹𝗹 𝗺𝗲 𝘄𝗵𝘆 𝘆𝗼𝘂 𝗺𝗶𝗴𝗵𝘁 𝗽𝗿𝗲𝗳𝗲𝗿 𝗹𝗲𝘁 𝗼𝗿 𝗰𝗼𝗻𝘀𝘁 𝗼𝘃𝗲𝗿 𝘃𝗮𝗿 𝗶𝗻 𝗺𝗼𝗱𝗲𝗿𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝗰𝗼𝗱𝗲?
        * In modern JavaScript, let and const are preferred over var because they are safer, clearer, and more predictable.

    ⁡⁣⁢⁣1. Block scope⁡
        var is function-scoped
        let and const are block-scoped
    
    This makes let and const easier to control and avoids accidental access outside a block.

   ⁡⁣⁢⁣𝟮. 𝗔𝘃𝗼𝗶𝗱𝘀 𝗮𝗰𝗰𝗶𝗱𝗲𝗻𝘁𝗮𝗹 𝗿𝗲𝗱𝗲𝗰𝗹𝗮𝗿𝗮𝘁𝗶𝗼𝗻⁡

        `var` allows redeclaration in the same scope:

    This helps prevent bugs.
     
⁡⁣⁢⁣    3. `const` protects values from reassignment
⁡
        If a variable should not change, use `const`.

    4. ⁡⁣⁢⁣Hoisting behavior is safer⁡

        `var` is hoisted and initialized with `undefined`, which can cause confusing bugs.
      
    ### ⁡⁣⁢⁣𝗦𝗵𝗼𝗿𝘁 𝗮𝗻𝘀𝘄𝗲𝗿⁡

        You prefer `let` and `const` over `var` because they:
        
        - have block scope
        - prevent accidental redeclaration
        - make code more predictable
        - reduce bugs
        - improve readability
        
    ### ⁡⁣⁢⁣𝗕𝗲𝘀𝘁 𝗿𝘂𝗹𝗲⁡
        
        - Use `const` if the variable should not be reassigned
        - Use `let` if the value will change
        - Avoid `var` in modern JavaScript
        
    
*/

//^ 1. Block scope example:-
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
    }

    console.log(a); // 10
    console.log(b); // Error
    console.log(c); // Error

//^ 2. Redeclaration example:-

    var x = 5;
    var x = 10; // allowed , but can lead to bugs
    console.log(x); // 10

    // With `let` and `const`, redeclaring in the same scope throws an error:

    let y = 5;
    // let y = 10; // Error
    console.log(y); // 5

    const z = 5;
    // const z = 10; // Error
    console.log(z); // 5

//^ 3. Reassignment example:-

    let count = 0;
    count = 1; // allowed
    console.log(count); // 1

    const pi = 3.14;
    // pi = 3.14159; // Error
    console.log(pi); // 3.14
    
//^ 4. Hoisting example:-

    console.log(m); // undefined
    var m = 10;

    // `let` and `const` are also hoisted, but they stay in the __temporal dead zone__ until declared:

    // console.log(n); // ReferenceError: Cannot access 'n' before initialization
    let n = 20;