/* 
    # ⁡⁢⁣⁣𝗪𝗵𝗮𝘁 𝗶𝘀 𝗘𝘃𝗲𝗻𝘁-𝗗𝗿𝗶𝘃𝗲𝗻 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗶𝗻𝗴 𝗶𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁?⁡

        * Event-driven programming is a programming model where the execution of code is triggered by events such as clicks, keyboard input, form submissions, or timers. In JavaScript, we use methods like addEventListener() to register event handlers. 
    
        * When the specified event occurs, the browser invokes the callback function. This allows web applications to respond dynamically to user interactions without constantly checking for input.

*/

// Simple Example

// Imagine you have a button.

<button id="btn">Click Me</button>

// JavaScript:

const button = document.getElementById("btn");

button.addEventListener("click", function () {
    console.log("Button clicked!");
});

/* 
    What happens?
        - The page loads.
        - JavaScript attaches a click event listener.
        - Nothing happens yet.
        - The user clicks the button.
        - JavaScript runs the callback function.

    ^ The callback is executed only when the event occurs. 

    
    User clicks button
        │
        ▼
    Browser detects click
        │
        ▼
    Browser creates a "click" event
        │
        ▼
    JavaScript finds the registered listener
        │
        ▼
    Callback function executes
*/