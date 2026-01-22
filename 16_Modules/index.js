//! CommonJS Modules (CJS)

//* single file import and export
// const great = require('./first.js');
// great();


//* multiple export 
/* const fs = require('./first.js');
const add = fs.add(3 , 3);
console.log(`Addition: ${add}`);
console.log("subtraction : " , fs.sub(10 , 5)); */

//*Export multiple item
/* 
const {add , sub , multiply , divide} = require('./first.js'); // same name from exported file
const {add:sanketAdd, sub , multiply , divide:sanketDivide} = require('./first.js'); // change the name of the variable
console.log(`Addition : ${sanketAdd(5 , 3)}`); // Output: Sanket

console.log(`Addition: ${add(5 , 3)}`);
console.log("division : " + sanketDivide(10 , 5));
console.log("subtraction : " , multiply(10 , 5));
 */

//* we can do this as well */
// const sanket = require('./first.js');
// console.log(sanket); // Output: Sanket
