// ===============================================
// ⁡⁢⁣⁣𝗧𝘆𝗽𝗲 𝗖𝗼𝗲𝗿𝗰𝗶𝗼𝗻 (𝗔𝘂𝘁𝗼-𝗖𝗼𝗻𝘃𝗲𝗿𝘀𝗶𝗼𝗻) 𝗶𝗻 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁⁡
// ===============================================

// Type coercion is the automatic conversion of values from one data type to another
// JavaScript performs implicit type conversion in certain operations

console.log("=== STRING COERCION (+ operator with strings) ===");
console.log("5" + 1);       // "51"   → number converted to string
console.log("5" + true);    // "5true" → boolean converted to string
console.log("5" + null);    // "5null" → null converted to string
console.log("5" + undefined); // "5undefined" → undefined converted to string
console.log(1 + "5");       // "15"   → number converted to string
console.log(true + "5");    // "true5" → boolean converted to string
console.log(null + 1);      // 1      → null converted to 0
console.log(true + false); // 1      → true becomes 1, false becomes 0, then 1+0=1
console.log(null + 1);      // 1      → null becomes 0
console.log(undefined + 1); // NaN    → undefined becomes NaN

console.log("\n=== NUMERIC COERCION (-, *, /, % operators) ===");
console.log("5" - 1);       // 4      → string converted to number
console.log("10" * 2);      // 20     → string converted to number
console.log("20" / 4);      // 5      → string converted to number
console.log("10" % 3);      // 1      → string converted to number
console.log(true - 1);      // 0      → true becomes 1, then 1-1=0
console.log(false * 5);     // 0      → false becomes 0

console.log("\n=== BOOLEAN COERCION ===");
// Falsy values: false, 0, -0, 0n, "", null, undefined, NaN
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));      // false
console.log(Boolean(false));    // false

// Truthy values: everything else
console.log(Boolean(1));        // true
console.log(Boolean("hello"));  // true
console.log(Boolean([]));       // true (empty array is truthy!)
console.log(Boolean({}));       // true (empty object is truthy!)
console.log(Boolean(-1));       // true
console.log(Boolean(Infinity)); // true

console.log("\n=== COMPARISON COERCION (==) ===");
console.log(5 == "5");          // true  → string converted to number
console.log(true == 1);         // true  → boolean converted to number
console.log(false == 0);        // true  → boolean converted to number
console.log(null == undefined); // true  → special case
console.log("" == 0);           // true  → empty string converted to 0
console.log(" " == 0);          // true  → space string converted to 0
console.log([] == 0);           // true  → empty array converted to 0
console.log([1] == 1);          // true  → array converted to string then number

console.log("\n=== STRICT COMPARISON (===) - NO COERCION ===");
console.log(5 === "5");         // false → no conversion
console.log(true === 1);        // false → no conversion
console.log(null === undefined); // false → no conversion

console.log("\n=== UNARY PLUS (+) COERCION ===");
console.log(+"5");              // 5     → string to number
console.log(+true);             // 1     → boolean to number
console.log(+false);            // 0     → boolean to number
console.log(+null);             // 0     → null to number
console.log(+undefined);        // NaN   → undefined to NaN
console.log(+"");               // 0     → empty string to 0
console.log(+" ");              // 0     → space string to 0
console.log(+"hello");          // NaN   → non-numeric string to NaN

console.log("\n=== ARRAY COERCION ===");
console.log([1, 2] + [3, 4]);   // "1,23,4" → arrays to strings then concatenated
console.log([] + []);           // ""      → empty arrays to empty strings
console.log([1] + [2]);         // "12"    → arrays to strings then concatenated
console.log([1] - [1]);         // 0       → arrays to numbers then subtracted
console.log([5] * [2]);         // 10      → arrays to numbers then multiplied

console.log("\n=== OBJECT COERCION ===");
console.log({} + {});           // "[object Object][object Object]"
console.log({} + []);           // "[object Object]"
console.log([] + {});           // "[object Object]"

console.log("\n=== SPECIAL CASES ===");
console.log(0 == false);        // true
console.log(1 == true);         // true
console.log(2 == true);         // false → true converts to 1, not 2
console.log("0" == false);      // true  → "0" becomes 0, false becomes 0
console.log("false" == false);  // false → "false" is truthy string

console.log("\n=== NaN BEHAVIOR ===");
console.log(NaN == NaN);        // false → NaN is not equal to anything
console.log(NaN === NaN);       // false → even with strict equality
console.log(isNaN(NaN));        // true  → use isNaN() to check for NaN
console.log(Number.isNaN(NaN)); // true  → more reliable NaN check

console.log("\n=== LOGICAL OPERATORS COERCION ===");
console.log(5 && "hello");      // "hello" → returns last truthy value
console.log(0 && "hello");      // 0       → returns first falsy value
console.log(5 || "hello");      // 5       → returns first truthy value
console.log(0 || "hello");      // "hello" → returns first truthy value
console.log(!!"hello");         // true    → double negation for boolean conversion
console.log(!!0);               // false   → double negation for boolean conversion

console.log("\n=== DATE COERCION ===");
let date = new Date();
console.log(date + 1);          // string concatenation with date string
console.log(date - 1);          // numeric subtraction with timestamp
console.log(+date);             // converts to timestamp number

console.log("\n=== FUNCTION COERCION ===");
function myFunc() { return 42; }
console.log(myFunc + "");       // "function myFunc() { return 42; }"
console.log(String(myFunc));    // "function myFunc() { return 42; }"

console.log("\n=== TEMPLATE LITERAL COERCION ===");
console.log(`Value: ${5}`);     // "Value: 5"
console.log(`Value: ${true}`);  // "Value: true"
console.log(`Value: ${null}`);  // "Value: null"
console.log(`Value: ${undefined}`); // "Value: undefined"

console.log("\n=== WEIRD BUT TRUE CASES ===");
console.log([] == ![]);         // true  → [] becomes "", ![] becomes false, "" == false
console.log(9 + "1");           // "91"  → string concatenation
console.log(9 - "1");           // 8     → numeric subtraction
console.log("9" + +"1");        // "91"  → +"1" becomes 1, then "9" + 1 becomes "91"
console.log("9" - -"1");        // 10    → -"1" becomes -1, then "9" - (-1) becomes 10

console.log("\n=== BEST PRACTICES ===");
// 1. Use === instead of == to avoid unexpected coercion
// 2. Use explicit conversion: Number(), String(), Boolean()
// 3. Use parseInt() or parseFloat() for string to number conversion
// 4. Be careful with + operator - it can mean addition or concatenation

console.log("\nExplicit Conversions (Recommended):");
console.log(Number("5"));       // 5
console.log(String(5));         // "5"
console.log(Boolean(5));        // true
console.log(parseInt("5.7"));   // 5
console.log(parseFloat("5.7")); // 5.7
