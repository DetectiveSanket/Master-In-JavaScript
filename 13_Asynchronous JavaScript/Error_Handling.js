/* 
    ⁡⁢⁣⁣𝙀𝙧𝙧𝙤𝙧 𝙃𝙖𝙣𝙙𝙡𝙞𝙣𝙜 𝙞𝙣 𝘼𝙨𝙮𝙣𝙘𝙝𝙧𝙤𝙣𝙤𝙪𝙨 𝙅𝙖𝙫𝙖𝙎𝙘𝙧𝙞𝙥𝙩⁡

        * In Asynchronous JS, there are two main ways to handle errors depending on which syntax you use.
            1) ⁡⁣⁣⁢𝗧𝗵𝗲 𝗔𝘀𝘆𝗻𝗰/𝗔𝘄𝗮𝗶𝘁 𝗪𝗮𝘆 (𝘁𝗿𝘆...𝗰𝗮𝘁𝗰𝗵)⁡
            2) ⁡⁣⁣⁢𝗧𝗵𝗲 𝗣𝗿𝗼𝗺𝗶𝘀𝗲 𝗪𝗮𝘆 (.𝗰𝗮𝘁𝗰𝗵())⁡

        ⁡⁣⁢⁣𝟭. 𝗧𝗵𝗲 𝗔𝘀𝘆𝗻𝗰/𝗔𝘄𝗮𝗶𝘁 𝗪𝗮𝘆 (𝘁𝗿𝘆...𝗰𝗮𝘁𝗰𝗵) ⁡ 
            - This is the most common and readable method. It "wraps" your risky code.  

        ⁡⁣⁢⁣𝟮. 𝗧𝗵𝗲 𝗣𝗿𝗼𝗺𝗶𝘀𝗲 𝗪𝗮𝘆 (.𝗰𝗮𝘁𝗰𝗵())⁡    
            - This method is used when working directly with Promises. It appends a .catch() method to handle errors.
            - It is less readable than the async/await method, especially with multiple chained promises.

    ⁡⁢⁣⁢𝙉𝙤𝙩𝙚⁡:⁡
        - Always ensure to handle errors in asynchronous code to prevent unhandled promise rejections and improve user experience.
*/

// ⁡⁣⁢⁣𝟭. 𝗧𝗵𝗲 𝗔𝘀𝘆𝗻𝗰/𝗔𝘄𝗮𝗶𝘁 𝗪𝗮𝘆 (𝘁𝗿𝘆...𝗰𝗮𝘁𝗰𝗵)⁡
 
async function AsyncFunctionErrorHandling() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/invalidEndpoint');
        
        if(!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
    }catch (e) {
        console.log(e);
    }finally {
        console.log('This will run regardless of the outcome above.');
    }
}
AsyncFunctionErrorHandling();

// ⁡⁣⁢⁣⁡⁣⁢⁣𝟮. 𝗧𝗵𝗲 𝗣𝗿𝗼𝗺𝗶𝘀𝗲 𝗪𝗮𝘆 (.𝗰𝗮𝘁𝗰𝗵())⁡

function PromiseErrorHandling() {
    fetch('https://jsonplaceholder.typicode.com/invalidEndpoint')
        .then(res => {
            if(!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
        })
        .catch(e => {
            console.log("samethink went wrong" , e)
        })
}