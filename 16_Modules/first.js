
function great() {
    console.log("Hello from first.js");
}
//* single file export
// module.exports = great;


const add = (a, b) => {
    return a + b;
}

const sub  = (a , b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a , b) => {
    return a / b;
}

//* Export multiple item
module.exports = {
    add , 
    sub , 
    multiply ,
    divide
}

//* we can do this as well
exports.sanket = () => {
    console.log("Sanket");
}


/* 
    ## ⁡⁢⁢⁢Note⁡: &# ⁡⁢⁣⁣CommonJS Modules (CJS)⁡
    - ⁡⁣⁢⁣CommonJS is a module system used in Node.js⁡.

        - only once `module.exports` can be used in a file.
        - `exports` is a shorthand for `module.exports`, but you cannot reassign ` 
        - You can use `module.exports` to export a single item or an object containing multiple items.
        - You can use `exports` to export multiple items, but it is just a shorthand
        - If you want to export a single function or object, use `module.exports`.
        - If you want to export multiple functions or variables, use `exports` or `module.exports` with an object.

*/