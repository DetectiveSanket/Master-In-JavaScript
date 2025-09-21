// var is function scope
// and let is block scope

// Example 1: Block scope with let
function blockScopeExample() {
    let x = 10;
    if(true) {
        let x = 20; // Different variable, only exists in this block
        console.log("Inside block x:", x); // Will print 20
    }
    console.log("Outside block x:", x); // Will print 10
}

// Example 2: Function scope with var
function functionScopeExample() {
    var y = 10;
    if(true) {
        var y = 20; // Same variable, overwrites the previous declaration
        console.log("Inside block y:", y); // Will print ⁡⁣⁣⁢20⁡
    }
    console.log("Outside block y:", y); // Will print ⁡⁣⁣⁢20⁡, not 10!
}

// Example 3: Scope outside functions
function scopeOutsideFunction() {

    if(true) {
        var functionScoped = "I am available outside the if block"; // • function
        let blockScoped = "I am only available inside the if block"; // • block
    }
    
    console.log(functionScoped); // Works fine
    console.log(blockScoped); // Would cause ReferenceError , we don't have access to blockScoped here
}

// Run the examples
console.log("Example 1: Block scope with let");
blockScopeExample();

console.log("\nExample 2: Function scope with var");
functionScopeExample();

console.log("\nExample 3: Scope outside functions");
scopeOutsideFunction();

/* 
    • Block scope is created by let and const
    • Function scope is created by var
    • Global scope is created by variables declared outside any function
    • Lexical scope is created by nested functions

    ⁡⁢⁣⁣# Var⁡
       - It is function scope -> When we use function that is called function scope
          :- ex - function abc() {} , const a = () => {}
       - Variables declared with var are hoisted to the top of their function scope
       - If declared outside a function, they have global scope
       - Can be re-declared and updated within its scope 

    ⁡⁢⁣⁣# Let⁡
        - It is block scope -> block {} -> the block without function
            :- ex - if(true) {}, for loop, while loop
        - Variables declared with let are also hoisted, but not initialized
        - Accessing them before the declaration results in a ReferenceError
        - Cannot be re-declared in the same scope, but can be updated

    ⁡⁢⁣⁣# Const⁡
        - Its is also block scope -> block {} -> the block without function
        - But variables declared with const must be initialized at the time of declaration
        - They cannot be re-declared or updated within their scope 
*/