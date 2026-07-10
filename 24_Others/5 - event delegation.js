/* 
    # ⁡⁢⁣⁣⁡⁢⁣⁣𝗘𝘃𝗲𝗻𝘁 𝗗𝗲𝗹𝗲𝗴𝗮𝘁𝗶𝗼𝗻⁡

        * Event Delegation is a pattern used to handle events efficiently by attaching a single event listener to a parent element instead of adding listeners to multiple similar child elements, and then identifying the actual source of the event using the event.target property. 

            - Reduces the number of event listeners.
            - Improves performance and memory usage.
            - Uses event bubbling to capture events.
            - Ideal for dynamically added elements.

        - This technique is particularly useful when dealing with dynamic content, as it allows you to manage events for elements that may not exist at the time the event listener is attached.

        - In simple words, Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element to manage events for its child elements, instead of attaching individual listeners to each child. This approach improves performance and simplifies event management, especially for dynamic content.


        Event Delegation works on the principle of ⁡⁣⁣⁢𝗲𝘃𝗲𝗻𝘁 𝗯𝘂𝗯𝗯𝗹𝗶𝗻𝗴⁡, where an event triggered on a child element propagates up to its parent elements. By attaching a listener to a parent, you can catch events from all its children and determine which child was interacted with using the event.target property.
*/

const customUI = document.createElement('ul');

for (var i = 1; i <= 10; i++) {
    const newElement = document.createElement('li');
    newElement.textContent = "This is line " + i;
    newElement.addEventListener('click', () => {
        console.log('Responding')
    })
    customUI.appendChild(newElement);
}

/* 
    ^ The above code attaches the same responding function to every <li> element. Here, a <ul> element is created, multiple <li> elements are added, and an event listener is attached to each item individually as it is created.

        - Each <li> has its own event listener.
        - Creates many identical responding functions.
        - Increases memory usage.
        - Less efficient compared to event delegation.
*/

/* 
    ^ An Improved Approach Before Event Delegation

        * Instead of creating a separate callback functions for each element, we can define a single reusable function and attach it to multiple event listeners. This reduces redundant function creation and improves code readability.
    
    - Uses one shared handler function for multiple elements.
    - Reduces duplicate function creation.
    - Improves code readability and maintainability.

    - However, each <li> still has its own event listener, which can become inefficient when dealing with a large number of elements. Event Delegation improves this by attaching a single event listener to the parent element and handling child events using event.target.
*/

const customUI = document.createElement('ul');

function responding() {
    console.log('Responding');
}

for (var i = 1; i <= 10; i++) {
    const newElement = document.createElement('li');
    newElement.textContent = "This is line " + i;
    newElement.addEventListener('click', responding);
    customUI.appendChild(newElement);
}


/* 
⁡⁢⁣⁣    𝗦𝘁𝗲𝗽𝘀 𝗼𝗳 𝗘𝘃𝗲𝗻𝘁 𝗗𝗲𝗹𝗲𝗴𝗮𝘁𝗶𝗼𝗻⁡
        * Event Delegation uses a single event listener on a parent element. When a child element is clicked, the event bubbles up to the parent, and event.target identifies the clicked element.

       - User clicks a child element (<li>).
       - The event reaches the target element.
       - The event bubbles up to the parent (<ul>).
       - The parent's event listener is triggered.
       - event.target identifies the clicked child element.

        ^ The .nodeName property of event.target can be used to check the type of the clicked element, such as <li>.
*/

const customUI = document.createElement('ul');

function responding(evt) {
    if (evt.target.nodeName === 'li')
        console.log('Responding')
}

for (var i = 1; i <= 10; i++) {
    const newElement = document.createElement('li');
    newElement.textContent = "This is line " + i;
    customUI.appendChild(newElement);
}

customUI.addEventListener('click', responding);