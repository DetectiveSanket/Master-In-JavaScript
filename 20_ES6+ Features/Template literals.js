/* 
    ## ⁡⁢⁣⁣𝗧𝗲𝗺𝗽𝗹𝗮𝘁𝗲 𝗟𝗶𝘁𝗲𝗿𝗮𝗹𝘀⁡

        * Template literals are strings wrapped in backticks (`) instead of standard single or double quotes. They allow you to cleanly embed variables, write multi-line text, and perform calculations directly within your string.


        • ⁡⁣⁢⁣Key Features⁡

            ⁡⁣⁢⁣𝟭. 𝗦𝘁𝗿𝗶𝗻𝗴 𝗜𝗻𝘁𝗲𝗿𝗽𝗼𝗹𝗮𝘁𝗶𝗼𝗻:-⁡
                * You can insert variables or any valid JavaScript expression directly inside a string using the ${expression} syntax. This replaces clumsy string concatenation using the + operator

            ⁡⁣⁢⁣𝟮. 𝗠𝘂𝗹𝘁𝗶-𝗹𝗶𝗻𝗲 𝗦𝘁𝗿𝗶𝗻𝗴𝘀:-
                * Traditional strings require escape characters like \n to break lines. Template literals naturally preserve line breaks exactly how you type them in your code⁡

            ⁡⁣⁢⁣𝟯. 𝗘𝗺𝗯𝗲𝗱𝗱𝗶𝗻𝗴 𝗘𝘅𝗽𝗿𝗲𝘀𝘀𝗶𝗼𝗻𝘀:-⁡
                * You can run math operations, call functions, or execute ternary logic inside the ${} placeholder.

            ⁡⁣⁢⁣𝟰. 𝗧𝗮𝗴𝗴𝗲𝗱 𝗧𝗲𝗺𝗽𝗹𝗮𝘁𝗲𝘀:-⁡
                * A more advanced feature that lets you parse template literals using a function. The function receives the static string pieces as an array, followed by the evaluated arguments


        • ⁡⁣⁢⁣𝗘𝘀𝗰𝗮𝗽𝗶𝗻𝗴 𝗖𝗵𝗮𝗿𝗮𝗰𝘁𝗲𝗿𝘀 ⁡

            - If you need a physical backtick inside your template literal, escape it with a backslash: \`.
            - If you need a physical dollar sign followed by curly braces, escape the dollar sign: \$    
*/

//! ⁡⁣⁢⁣𝟭. 𝗦𝘁𝗿𝗶𝗻𝗴 𝗜𝗻𝘁𝗲𝗿𝗽𝗼𝗹𝗮𝘁𝗶𝗼𝗻:-⁡
const user = 'Alice';
const items = 3;

// Old way (Concatenation)
console.log('Hello ' + user + ', you have ' + items + ' items.');

// New way (Template Literals)
console.log(`Hello ${user}, you have ${items} items.`); 


//! 𝟮. 𝗠𝘂𝗹𝘁𝗶-𝗹𝗶𝗻𝗲 𝗦𝘁𝗿𝗶𝗻𝗴𝘀:-

// Line breaks are automatically preserved
const emailTemplate = `
  Dear Customer,
  
  Thank you for your recent purchase.
  Your order is processing.
`;


//! ⁡⁣⁢⁣𝟯. 𝗘𝗺𝗯𝗲𝗱𝗱𝗶𝗻𝗴 𝗘𝘅𝗽𝗿𝗲𝘀𝘀𝗶𝗼𝗻𝘀:-⁡
const price = 20;
const tax = 0.1;

// Math expression
console.log(`Total: $${price * (1 + tax)}`); // Total: $22

// Ternary logic
console.log(`Status: ${price > 50 ? 'Premium' : 'Standard'}`);


//! 𝟰. 𝗧𝗮𝗴𝗴𝗲𝗱 𝗧𝗲𝗺𝗽𝗹𝗮𝘁𝗲𝘀:-⁡

function highlight(strings, ...values) {
    return strings.reduce((acc, str, i) => `${acc}${str}<b>${values[i] || ''}</b>`, '');
}
  
  const name = 'Bob';
  const game = 'Chess';
  
  // The function 'highlight' runs before outputting the final format
  const result = highlight`User ${name} loves playing ${game}.`;
  console.log(result); // User <b>Bob</b> loves playing <b>Chess</b>.
  