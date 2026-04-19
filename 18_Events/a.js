
/* 
⁡⁣⁢⁣    ⁡⁢⁣⁣# |── 𝗘𝘃𝗲𝗻𝘁𝘀⁡
    | ├── 𝗘𝘃𝗲𝗻𝘁 𝗹𝗶𝘀𝘁𝗲𝗻𝗲𝗿𝘀
    | ├── 𝗘𝘃𝗲𝗻𝘁 𝗽𝗿𝗼𝗽𝗮𝗴𝗮𝘁𝗶𝗼𝗻
    | └── 𝗘𝘃𝗲𝗻𝘁 𝗕𝘂𝗯𝗯𝗹𝗶𝗻𝗴
    | └── 𝗘𝘃𝗲𝗻𝘁 𝗖𝗮𝗽𝘁𝘂𝗿𝗶𝗻𝗴
    | └── 𝗘𝘃𝗲𝗻𝘁 𝗱𝗲𝗹𝗲𝗴𝗮𝘁𝗶𝗼𝗻⁡

    ⟫ ⁡⁢⁣⁣𝗘𝘃𝗲𝗻𝘁⁡:-
        * An event is an action or occurrence that happens in the system you are programming, which the system tells you about so your code can react to it. 

    ^ In JavaScript, an **event** is something that happens in the browser.

    -- So Basically Event is an action that happens in the browser, and JavaScript can respond to that action.

    ## ✅ Common Examples of Events
        - 🖱️ User clicks a button
        - ⌨️ User types in an input field
        - 🖱️ User moves the mouse
        - 📩 User submits a form
    
    - So when a user clicks on an element, JavaScript can detect that action.
    
    ## Example:
        ⁡⁢⁢⁢button.addEventListener("click", function () {
            console.log("Button clicked");
        });⁡
    
    ### 💡 Simple Meaning:
    When the button is clicked, JavaScript runs the given function.

    🔥 ⁡⁢⁣⁣𝟭. 𝗘𝘃𝗲𝗻𝘁 𝗹𝗶𝘀𝘁𝗲𝗻𝗲𝗿𝘀.⁡
        * An event listener is a function that waits for a specific event to occur on an element and then executes some code in response to that event.

        * We can attach event listeners to elements using the `⁡⁣⁣⁢addEventListener⁡` method.

        ## Example:
            ```javascript
    ⁡⁢⁢⁢            const button = document.querySelector("button");

                button.addEventListener("click", function () {
                    console.log("Button clicked");
                });⁡
            ```

        - In this example, we select a button element and attach a click event listener to it. When the button is clicked, the function inside `addEventListener` will run, logging "Button clicked" to the console.


    🔥 ⁡⁢⁣⁣𝟮. 𝗘𝘃𝗲𝗻𝘁 𝗣𝗿𝗼𝗽𝗮𝗴𝗮𝘁𝗶𝗼𝗻.⁡
        * Event propagation is the process by which an event moves through the DOM (Document Object Model) tree when it occurs on an element.

        - When an event occurs on an element, it can trigger event listeners on that element as well as on its parent elements. This movement of the event through the DOM is called **event propagation**.

        ## Phases of Event Propagation:
        1. **Capturing Phase**: The event starts from the root of the DOM and moves down to the target element.
        2. **Target Phase**: The event reaches the target element where it occurred.
        3. **Bubbling Phase**: After reaching the target, the event moves back up to the root, triggering event listeners on parent elements.

            - So, if you click on a button inside a div, the event will first go down from the document to the button (capturing), then it will trigger the event on the button (target), and finally, it will go back up to the document (bubbling).

            - This allows you to handle events at different levels of the DOM, giving you flexibility in how you respond to user interactions.
    

    🔥 ⁡⁢⁣⁣𝟯. 𝗘𝘃𝗲𝗻𝘁 𝗕𝘂𝗯𝗯𝗹𝗶𝗻𝗴⁡
        * When an event happens on a child element, it first runs on that child, then moves upward to the parent, and then upward again.

        ^ This upward movement is called **event bubbling**.

        ## 🧠 Easy Line to Remember
            > **Bubbling means event goes from inside to outside.**

        ### Direction:
            - `child -> parent -> grandparent`

        ### Phase Map (Bubbling)
        ```text
            Target (child)
            ↑
            Parent
            ↑
            Grandparent
        ```
    
    🔥 ⁡⁢⁣⁣⁡⁢⁣⁣𝟰. 𝗘𝘃𝗲𝗻𝘁 𝗖𝗮𝗽𝘁𝘂𝗿𝗶𝗻𝗴.⁡⁡
        * Event capturing is the first phase of event propagation, where the event starts from the root of the DOM and moves down to the target element.

        ^ Capturing is the opposite of bubbling.

        In capturing, the event starts from the outer element and moves inward to the target element.
        
        ## 🧠 Easy Line to Remember
        > **Capturing means event goes from outside to inside.**
        

    🔥 ⁡⁢⁣⁣𝟱. 𝗘𝘃𝗲𝗻𝘁 𝗗𝗲𝗹𝗮𝗴𝗮𝘁𝗶𝗼𝗻.⁡
        * Event delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of attaching multiple event listeners to individual child elements.

        - The event listener on the parent element can then handle events that occur on its child elements by using the event object's properties to determine which child element triggered the event.

        - This technique is particularly useful when you have a large number of child elements or when child elements are added dynamically, as it helps to improve performance and reduce memory usage.


*/