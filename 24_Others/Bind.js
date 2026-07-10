/* 

    # ⁡⁢⁣⁣𝗕𝗶𝗻𝗱() 𝗠𝗲𝘁𝗵𝗼𝗱 𝗶𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁.⁡

        * The easiest way to think about .bind() is this:
            ^ .bind() permanently tells a function what '𝘁𝗵𝗶𝘀' should be.

        - bind() is a JavaScript method that creates a new function with its '𝘁𝗵𝗶𝘀' value permanently set to a specific object. It doesn't execute the function immediately—it returns a new function that can be called later. It's useful when passing object methods as callbacks, where this might otherwise be lost.  
        
        
    <> ⁡⁢⁣⁣𝗜𝗳 𝘁𝗵𝗲 𝗶𝗻𝘁𝗲𝗿𝘃𝗶𝗲𝘄𝗲𝗿 𝗮𝘀𝗸𝘀 𝘁𝗵𝗲 𝗱𝗶𝗳𝗳𝗲𝗿𝗲𝗻𝗰𝗲 𝗯𝗲𝘁𝘄𝗲𝗲𝗻 𝗰𝗮𝗹𝗹, 𝗮𝗽𝗽𝗹𝘆, 𝗮𝗻𝗱 𝗯𝗶𝗻𝗱⁡

        You can answer:
            - ⁡⁣⁢⁣𝗰𝗮𝗹𝗹()⁡ → Invokes the function immediately with a specified 'this' .
            - ⁡⁣⁢⁣⁡⁣⁢⁣𝗮𝗽𝗽𝗹𝘆()⁡⁡ → Same as call(), but arguments are passed as an array.
            - ⁡⁣⁢⁣𝗯𝗶𝗻𝗱()⁡ → Does not invoke the function immediately. It returns a new function with this permanently bound.   
*/

//! Imagine this example:
const person = {
  name: "Alice",
  sayHello() {
    console.log("Hello, I'm " + this.name);
  }
};

person.sayHello();
/* 
    Output: Hello, I'm Alice
        > Here, this is person, so this.name is "Alice" 
*/

// ! Now suppose you save the function:
const hello = person.sayHello;
hello();

/* 

    Output: Hello, I'm undefined

    > Why?
        * Because hello() is no longer being called as person.sayHello(). JavaScript doesn't know who this should be anymore.
*/

//! Here's where bind() helps.
const hello = person.sayHello.bind(person);

hello();
/* 
    Output: Hello, I'm Alice

        * bind(person) creates a new function that always uses person as this.

    - Think of it like putting a sticky note on the function saying:
        > "Whenever someone calls me, pretend I belong to person."

 */


// ⁡⁢⁣⁣𝗧𝗵𝗲𝗻 𝗴𝗶𝘃𝗲 𝗮 𝘀𝗶𝗺𝗽𝗹𝗲 𝗲𝘅𝗮𝗺𝗽𝗹𝗲:⁡

const person = {
    name: "Alice",
    greet() {
        console.log("Hello " + this.name);
    }
};

const greet = person.greet.bind(person);
greet(); // Hello Alice

/* 
    ⁡⁣⁣⁢𝗬𝗼𝘂 𝗰𝗮𝗻 𝗲𝘅𝗽𝗹𝗮𝗶𝗻 𝗶𝘁 𝗹𝗶𝗸𝗲 𝘁𝗵𝗶𝘀:⁡
        - "Without bind(), if I assign person.greet to another variable or pass it as a callback, this no longer refers to person. By using bind(person), I create a new function where this is always person, regardless of how or where it's called." 

*/