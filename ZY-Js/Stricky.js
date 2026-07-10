
//1. Working with Variables and Data Types in JavaScript

console.log(null === undefined)
/* 
    - Expression: null === undefined
    - Result: false

        * In JavaScript, both null and undefined represent "empty" values but are distinct types. null is a special object representing the intentional absence of a value, while undefined signifies that a variable has been declared but not assigned a value. Despite their similar purpose, they are not strictly equal (===) to each other.

    - null === undefined evaluates to false because JavaScript does not perform type coercion with ===.

    - console.log(null == undefined) :- For this case the result will be ⁡⁣⁣⁢true⁡ because == operator performs type coercion and considers null and undefined equal in value.

*/

console.log(5 > 3 > 2)
/* 
    - Expression: 5 > 3 > 2
    - Result: false
        * At first glance, this expression may appear to be checking if 5 is greater than 3 and 3 is greater than 2, but JavaScript evaluates it left-to-right due to its operator precedence.
    
    - First, 5 > 3 evaluates to true.
    - Then, true > 2 is evaluated, which in JavaScript results in 1 > 2 (since true is coerced to 1), which evaluates to false.

    ? So, 5 > 3 > 2 evaluates to false.
*/

console.log([] === [])
/* 

    - Expression: [] === []
    - Result: false
        * In JavaScript, arrays are objects. Even if two arrays have the same content, they are still different objects in memory.

    ^ When you compare two arrays with ===, you are comparing their references, not their contents.

    - Since [] and [] are different instances in memory, the result is false.

    > ⁡⁢⁢⁢console.log([] == [])⁡ :- For this case also the result will be ⁡⁣⁣⁢false⁡ because both are different instances in memory.
*/

console.log("10" < "9")
/*  
    - Expression: "10" < "9"
    - Result: true
        * In JavaScript, when comparing strings with relational operators like < or >, the comparison is done lexicographically (dictionary order) based on Unicode values of characters.

    - In this case, "10" is compared to "9" character by character. The first character of "10" is '1', and the first character of "9" is '9'. Since '1' has a lower Unicode value than '9', the comparison evaluates to true.
    - Therefore, "10" < "9" evaluates to true.
*/

console.log(NaN === NaN)
/* 
    - Expression: NaN === NaN
    - Result: false
        * In JavaScript, NaN (Not-a-Number) is a special value that represents an invalid number or the result of an operation that cannot produce a valid number.
    
    > One of the most unusual aspects of NaN is that it is not equal to itself. This behavior exists due to the design of the IEEE 754 standard, which JavaScript follows for floating-point arithmetic.

    - As a result, NaN === NaN returns false.
    - To check if a value is NaN, use Number.isNaN().



    >  ⁡⁢⁢⁢console.log(NaN == NaN)⁡ :- For this case also the result will be ⁡⁣⁣⁢false⁡ because NaN is not equal to itself in JavaScript.
*/

//! JavaScript uses type coercion with the loose equality operator (==).

console.log(true == 1)
/*  
    - Expression: true == 1
    - Result: true
        * JavaScript uses type coercion with the loose equality operator (==). When comparing true and 1, JavaScript converts true to 1 and then compares the values.

    - Since 1 == 1 is true, the overall expression evaluates to true.
    - This behavior might lead to unexpected results in some cases, so it’s often recommended to use the strict equality operator (===) to avoid implicit type coercion.
*/

console.log(undefined > 0)
/* 
    - Expression: undefined > 0
    - Result: false
        * When JavaScript attempts to compare undefined with 0, it converts undefined to NaN (Not-a-Number). Any comparison involving NaN returns false.

    - undefined > 0 becomes NaN > 0, which evaluates to false.
*/

console.log("5" === 5)
/* 
    - Expression: "5" === 5
    - Result: false
        * The strict equality operator (===) checks both value and type. In this case, "5" is a string and 5 is a number. Since their types are different, the comparison evaluates to false.

*/

console.log([1, 2] == [1, 2])
/* 
    - Expression: [1, 2] == [1, 2]
    - Result: false
        * Even though both arrays contain the same elements, JavaScript compares arrays by reference, not by value.

    - Since each array is a separate object in memory, their references are different, and thus the comparison returns false.
    - To check if two arrays are equal, you must compare their contents element by element.
*/