// #: Thinkive Technologies Interview Questions :-

//* In this example, we have an object obj with a property value and two methods: increment and arrowIncrement. The increment method is a regular function that uses the this keyword to access the value property of the obj object. When we call obj.increment(), it correctly returns 10.

//* On the other hand, the arrowIncrement method is defined as an arrow function. Arrow functions do not have their own this context; instead, they inherit this from the surrounding lexical scope. In this case, the surrounding scope is the global context (or module context in strict mode), where this does not refer to the obj object. As a result, when we call obj.arrowIncrement(), it returns undefined because this.value does not exist in that context.


//? Q: What will be the output of the following code snippet?
const obj = {

    value:10,

    increment: function() {
        return this.value;
    },

    arrowIncrement: () => {
        return this.value;
    }
}

console.log(obj.increment()); //^ Output: 10
console.log(obj.arrowIncrement()); //^ Output: undefined

//!-------------------------------------------//

//* In this example, we have a function that logs "A" to the console, then sets a timeout to log "B" after a delay. We also have a promise that resolves immediately and logs "C" when it resolves. Finally, we log "D" to the console.

//* Its important to note that the order of execution is not strictly top-to-bottom due to the asynchronous nature of setTimeout and promises. The output will be "A", "D", "C", "B" because the synchronous code runs first, followed by the promise resolution, and finally the setTimeout callback. because the setTimeout is placed in the event queue and will only execute after the current call stack is cleared.

//? Q: What will be the output of the following code snippet?

console.log("A");

setTimeout(() => {
    console.log("B")
});

promise.resolve().then(() => {
    console.log("C")
});

console.log("D");

//^ output: A D C B

//! -------------------------------------//

//? Q: What will be the output of the following code snippet? react code snippet?

function App() {

    const [count, setCount] = React.useState(0);

    const handleClick = () => {
        setCount(count + 1);
        setCount(count + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

//* output:- When the button is clicked, the output will be "Count: 1" instead of "Count: 2". This is because React batches state updates for performance reasons. The count variable is captured in the closure of the handleClick function, and both setCount calls use the same value of count (which is 0 at the time of the click). Therefore, both calls effectively set the count to 1. To correctly increment the count by 2, you can use the functional form of setState:

//? Q: How can you modify the handleClick function to correctly increment the count by 2?

//* You can modify the handleClick function to use the functional form of setState, which takes a function as an argument. This function receives the previous state and returns the new state. Here's how you can do it:

function App() {
    const [count, setCount] = React.useState(0);

    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

//* Now, when the button is clicked, the output will correctly be "Count: 2" because each setCount call will use the updated value of count from the previous call.

//!---------------------------//

//? Q: How to write useEffect hook in react?

import {useEffect} from 'react';

function App() {
        
    useEffect(() => {
        console.log("useEffect called");
    },[]);

    return(
        <h1>useEffect</h1>
    )
}

//* In this example, the useEffect hook is used to perform side effects in a functional component. The first argument is a function that contains the code to be executed when the component mounts or updates. The second argument is an array of dependencies that determines when the effect should run. In this case, an empty array is passed, which means the effect will only run once when the component mounts.