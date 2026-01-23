
//To make sure we're still on the same page, try to convert this .then() block into an async/await function:
    
    function fetchData() {
        return fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }

    fetchData();


    async function fetchDataAsync() {

        try {
            const res = await fetch('https://api.example.com/data');
            const data = await res.json();
            console.log(data);
        } catch(err) {
            console.error(err);
        }
    }

    fetchDataAsync();

//----------------------------------------------------------------------------------------------//

/*     
        Imagine you need to fetch User Data and User Posts. Currently, your code does this:

            - Wait for User.
            - Then wait for Posts.

        The Task: How would you change the code below so that both fetches start at the same time (in parallel) rather than waiting for one to finish before starting the next?

        Hint: Think about Promise.all(). 

        Q): Would you like to try optimizing this code, or would you prefer I explain how Promise.all works first?

*/

async function getUserDashboard() {
    try {
        // These are currently happening one after the other (slow!)
        const user = await fetch('https://api.example.com/user');
        const posts = await fetch('https://api.example.com/posts');
        
        console.log("Dashboard loaded", user, posts);
    } catch (error) {
        console.error("Failed to load dashboard", error);
    }
}


//*: Using async/await with Promise.all to optimize the fetches
async function getUserDashboardOptimized() {
    try {
        // Start both fetches in parallel
        const userPromise = fetch('https://api.example.com/user');
        const postsPromise = fetch('https://api.example.com/posts');
        // Wait for both to complete
        const [user, posts] = await Promise.all([userPromise, postsPromise]);
        // console.log("Dashboard loaded", user, posts);

        const userData = await user.json();
        const postsData = await posts.json();
        console.log("Dashboard loaded", userData, postsData);
    } catch (error) {
        console.error("Failed to load dashboard", error);
    }
}

// Call the optimized function
getUserDashboardOptimized();

//*: Using Promise.all with .then() to fetch multiple resources in parallel
const one = fetch('https://api.example.com/one');
const two = fetch('https://api.example.com/two');

function fetchBoth() {
    return Promise.all([one, two])
    .then(([resOne, resTwo]) => Promise.all([resOne.json(), resTwo.json()]))
    .then(([dataOne, dataTwo]) => {
        console.log('Data One:', dataOne);
        console.log('Data Two:', dataTwo);
    })
    .catch(err => console.error(err));
}
fetchBoth();

//*  More better version with async/await , try/catch.. */

async function fetchBothOptimized() {

    try {
            const [res1 , res2] = await Promise.all([
               fetch("https://api.example.com/one"),
               fetch('https://api.example.com/two')
            ])

            const [data1 , data2] = await Promise.all([
                res1.json(),
                res2.json()
            ]);

            console.log('Data' , data1 , data2);
    }catch (e) {
        console.log(e);
    }
};

fetchBothOptimized();


//--------------------------⁡⁢⁣⁣𝗣𝗿𝗼𝗺𝗶𝘀𝗲.𝗮𝗹𝗹𝗦𝗲𝘁𝘁𝗹𝗲𝗱()⁡.-------------------------------//

/* 
    >> Let's dive into Promise.allSettled().

        ^> The Problem with Promise.all()
            - As we discussed, Promise.all() is a "perfectionist." If you are fetching data for 10 different widgets and just one API call fails, the whole thing crashes into the catch block. You lose the data for the 9 widgets that actually worked.

        ^> The Solution: Promise.allSettled()
            - This method waits for all promises to finish, regardless of whether they fulfilled (succeeded) or rejected (failed). It returns an array of objects describing the outcome of each promise.

        *> Code Challenge: The "Resilient" Dashboard
            - Imagine you are building a dashboard that fetches Weather and News. If the News server is down, we still want to show the Weather.  
            
        ?> Questions for you:
            1) ⁡⁣⁢⁣In the code below, if newsPromise fails, will the catch block be triggered? (Hint: Look at how allSettled handles errors).⁡
            ->  - No, the catch block will not be triggered because Promise.allSettled() handles both fulfilled and rejected promises without throwing an error.
                - With Promise.allSettled(), the code almost never goes to the .catch() block. Instead, you handle success and failure for each promise individually in the results array.
                - In Promise.allSettled(), it’s like a "checklist." Even if an API call fails, allSettled considers its job successful because it successfully waited to see what happened. It just records the failure in the results array and moves on.

            2) ⁡⁣⁢⁣Why do you think we use result.value for success but result.reason for failure? ⁡ 
                - Success (value): The package arrived! The value is the content inside the box (your data).

                - Failure (reason): The box is empty, but there is a note attached. The reason is the explanation on that note (e.g., "Address not found" or "Server 500 error").  
*/

async function fetchDashboard() {
    const weatherPromise = fetch('https://api.example.com/weather');
    const newsPromise = fetch('https://api.example.com/news');

    const result = await Promise.allSettled([weatherPromise, newsPromise]);

    result.forEach((res , index)=> {
        if(res.status === "fulfilled") {
            console.log(`Task ${index} successed : `, res.value)
        }

        else {
            console.log(`Task ${index} failed : `, res.reason)
        }
    });
}

/* 
    >> Example Output:
        [
            { status: "fulfilled", value: ResponseObj }, // Weather worked!
            { status: "rejected",  reason: ErrorObj }    // News failed!
        ]
*/

/* 
    Task: scenario: You are fetching a user's Profile and their Settings. If the Settings fails, you want to show a message: "Settings could not be loaded."

    * In JavaScript, Promise.allSettled doesn't use the word "success"—it uses fulfilled for success and rejected for failure.
*/

 fetchUserProfileAndSettings = async () => {
    const profilePromise = fetch('https://api.example.com/profile');
    const settingsPromise = fetch('https://api.example.com/settings');

    const results = await Promise.allSettled([profilePromise, settingsPromise]);

    const profileResult = results[0];
    const settingsResult = results[1];

    if(settingsResult.status === "rejected") {
        console.log("Settings could not be loaded.");
    }
    else {
        const settingsData = await settingsResult.value.json();
        console.log("Settings loaded:", settingsData);
    }
};

 fetchUserProfileAndSettings();
 
 // Or
    const result = Promise.allsettled([profilePromise(), settingsPromise()]);
    const settingResult = result[1];
    // const [, settingResult] = result;

    if(settingResult.status === "rejected") {
        console.log("Settings could not be loaded.");
    }
    else {
        const settingsData = await settingResult.value.json();
        console.log("Settings loaded:", settingsData);
    }


//------------------------------- ⁡⁢⁣⁣𝗣𝗿𝗼𝗺𝗶𝘀𝗲.𝗿𝗮𝗰𝗲()⁡ -------------------------------//

/* 
    ^> Now that you know how to wait for all (or all settled) promises, what if you only care about the first one to finish?

    *> Promise.race() takes an array of promises and returns the result of the very first one that settles (whether it succeeds or fails). It’s a race!

    ?> Real-World Use Case: The Timeout
        - Imagine you are fetching data from a slow server. You don't want the user waiting forever. You can "race" your fetch request against a timer.

*/

async function fetchWithTimeout(url, timeoutMs) {
    const fetchPromise = fetch(url);
    const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timed out')), timeoutMs)
    );

    try {
        const response = await Promise.race([fetchPromise, timeoutPromise]);
        const data = await response.json();
        console.log('Data fetched:', data);
    } catch (error) {
        console.error('Fetch failed:', error);
    }
}

fetchWithTimeout('https://api.example.com/data', 5000); // 5 seconds timeout

//OR
const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Request timed out')), 5000);
})

const data = fetch('https://api.example.com/data');

try{
    const res = await Promise.race([data, timeout]);
    const finalData = await res.json();
    console.log('Data fetched:', finalData);
}catch(e) {
    console.log(e);
}

/*   
    Why use _?
        - In a Promise constructor, the syntax is usually (resolve, reject).

        - The Problem: JavaScript editors (and other developers) might give you a warning if you define a variable like resolve but never actually use it in your code.

        - The Solution: Using an underscore _ tells the computer (and other humans): "I know there is a parameter here, but I'm going to ignore it because I don't need it."

        - In your timeout example, we only wanted to trigger a failure (reject). Since we never intended to call resolve, we replaced it with _ to keep the code clean.

        &Comparison of the "Big Three" Methods

        Method,Behavior,Best Use Case
            - Promise.all():-
                - Fails if any fail.,
                ex- "When you need everything to work (e.g., loading a user's profile + permissions)."

            - Promise.allSettled():-
                - "Waits for everything, regardless of outcome.",
                ex- "When tasks are independent (e.g., loading 5 different news widgets)."

            - Promise.race():-
                - Returns the first one to finish (success or fail).
                ex: Timeouts or finding the fastest server/mirror.
*/

//---------------------------------------⁡⁢⁣⁣𝗣𝗿𝗼𝗺𝗶𝘀𝗲.𝗮𝗻𝘆()⁡----------------------------------//

/* 
    ^> There is actually one more similar to race called Promise.any().
        * Promise.race() returns the first one to finish, even if it's an error.
        * Promise.any() ignores the errors and waits for the first successful promise. If everything fails, then it throws an error.


        ?> Real-World Use Case: Fastest Successful Response
        Scenario: You have three different servers (A, B, and C) hosting the same image. You don't care which one you use, you just want the one that responds successfully the fastest.

*/    

async function fetchFastestImage() {
    const serverA = fetch('https://server-a.example.com/image');
    const serverB = fetch('https://server-b.example.com/image');
    const serverC = fetch('https://server-c.example.com/image');    

    try{
        const response = await Promise.any([serverA, serverB, serverC]);
        const imageData = await response.blob(); // Assuming it's an image
        console.log('Fastest image fetched:', imageData);

    }catch(err) {
        console.error('All servers failed:', err);
    }
}

fetchFastestImage();

/* 
    >> Example Output:
        - If Server B responds first with a 200 OK:
            Fastest image fetched: Blob {...}
        - If all servers fail:
            All servers failed: AggregateError: All promises were rejected
*/

//-------------------------------------⁡⁢⁣⁣𝗕𝗜𝗚 𝗣𝗜𝗖𝗧𝗨𝗥𝗘⁡--------------------------------------//

/* 
    ## Final Practice Challenge 🏆
        * Let's combine everything. Imagine you are building a Flight Booking App.

            1) You need to fetch prices from 3 different Airlines (Airline A, B, and C).
            2) Some airlines might have server errors (don't let one error break the whole app!).
            3) You want to show the prices for all airlines that successfully responded.

        ^ Which Promise method is the best fit for this specific "Flight Search" scenario?

        A) Promise.all
        B) Promise.allSettled
        C) Promise.race
        D) Promise.any 

        >>>>> ANSWER >>>>
        1. Why ⁡⁣⁢⁣Promise.allSettled⁡ is the winner for Flight Search
            <> Your Logic: You want to finish all promises and see both success and failure. 
            <> Professional Explanation: > "I chose allSettled because the data sources are independent. If Airline A's server is down, I still want to provide the user with the available data from Airlines B and C. It ensures a resilient UI where one partial failure doesn't break the entire feature."
        
        2. Why ⁡⁣⁢⁣Promise.any⁡ is a good "Runner Up"
            <> Your Logic: It gives the first success, which is useful if you just need any response.     
            <> Professional Explanation: I would use Promise.any if the goal was redundancy. If I am asking three different servers for the same data, I only need the fastest successful response to show the user as quickly as possible.
        
        3. Why we ⁡⁣⁢⁣reject Promise.all and Promise.race⁡
            <> Your Logic for A: If one fails, it stops. 
            <> Professional Explanation: Promise.all is too fragile for this scenario. It follows an 'all-or-nothing' approach. A single network timeout from one airline would cause the user to see an error screen instead of the other available flight prices."
        
            <> Promise.race is unreliable here because it settles on the first completion, even if that completion is a failure. We don't want to show an 'Error' message to the user just because one server responded with a failure slightly faster than the others responded with success."
*/

//------------------------------------- End of File ------------------------------------------//