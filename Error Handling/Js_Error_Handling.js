// This file contains examples for explaining Error Handling in JavaScript.

// --- 1. Example with try...catch...finally ---

const potentiallyBadJson = '{"name": "Alice", "age": 30,}'; // Invalid JSON (trailing comma)
const validJson = '{"name": "Bob", "age": 25}';

function parseUser(jsonString) {
  try {
    console.log("Attempting to parse JSON...");
    const user = JSON.parse(jsonString);
    console.log("Success! User:", user.name);
    return user;
  } catch (error) {
    // This block runs only if JSON.parse() fails
    console.error("Caught an error! Something is wrong with the JSON string.");
    console.error("Error details:", error.message); // e.g., "Unexpected token } in JSON at position..."
    return null; // Return a default value
  } finally {
    // This block runs every time, success or failure.
    console.log("--- Parsing attempt finished. ---");
  }
}

parseUser(potentiallyBadJson);
console.log("\n");
parseUser(validJson);


// --- 2. Example with throw ---

function calculateBmi(weight, height) {
  if (weight <= 0 || height <= 0) {
    // Create and throw a new Error object with a helpful message.
    throw new Error("Weight and height must be positive numbers.");
  }
  if (typeof weight !== 'number' || typeof height !== 'number') {
    throw new TypeError("Weight and height must be of type number.");
  }
  return weight / (height * height);
}

try {
  const bmi = calculateBmi(70, -1.75); // Invalid height
  console.log("Your BMI is:", bmi);
} catch (error) {
  console.error("Could not calculate BMI:", error.message);
}

// --- 3. Async Error Handling with Promises (.catch) ---

fetch('https://api.example.com/data-that-does-not-exist') // This will likely result in a 404 error
  .then(response => {
    if (!response.ok) {
      // Manually throw an error for bad HTTP statuses (like 404, 500)
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Data received:", data);
  })
  .catch(error => {
    // This single .catch() handles network errors and the error we threw.
    console.error("Failed to fetch data:", error.message);
  });

// --- 4. Async Error Handling with async/await (try...catch) ---

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data-that-does-not-exist');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Data received:", data);
  } catch (error) {
    console.error("An error occurred in fetchData:", error.message);
  }
}

fetchData();