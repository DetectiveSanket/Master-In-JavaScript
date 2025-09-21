# 𝗦𝗰𝗼𝗽𝗲 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻

---

## Q1. What is Scope?

**A1.** Scope refers to the context in which variables, functions, and objects are accessible in a program. It determines the visibility and lifetime of these entities.

### Type of Scope

- **Function Scope**: (`var`)
- **Global Scope**: (`let`, `const`)
- **Block Scope**: (`let`, `const`) -> `{}`

---

## Q2. What is Function Scope?

**A2.** Function scope means that variables declared within a function are only accessible within that function. They cannot be accessed from outside the function.

- function without name

  ```javascript
  function() {
    var x = 10; // x is only accessible within this function
    console.log(x); // 10
  }

  console.log(x); // ReferenceError: x is not defined
  ```

  ```javascript
  function myFunction() {
      var y = 20; // y is only accessible within this function
      console.log(y); // 20
  }
  ```

---

## Q3. What is Global Scope?

**A3.** Global scope means that variables declared outside of any function are accessible from anywhere in the program. They have a global lifetime and can be accessed by any function or block of code.

- global without function name

  ```javascript
  var x = 10; // x is globally accessible

  function myFunction() {
    console.log(x); // 10
  }

  myFunction(); // 10

  console.log(x); // 10
  ```

  ```javascript
  let y = 20; // y is also globally accessible

  if (true) {
    console.log(y); // 20
  }

  console.log(y); // 20
  ```

---

## Q4. What is Block Scope?

**A4.** Block scope refers to variables declared within a block ex -> `{}` (enclosed by curly braces `{}`) using `let` or `const`. These variables are only accessible within that block and are not visible outside of it.

- block without function name called  -> {}

  ```javascript
  {
    let x = 10; // x is only accessible within this block
    console.log(x); // 10
  }

  console.log(x); // ReferenceError: x is not defined
  ```

  ```javascript
  if(true) {
      let y = 20; // y is only accessible within this if block
      console.log(y); // 20
  }
  ```

---

## Q5. What is the difference between `var`, `let`, and `const`?

- `var` is function-scoped or globally scoped, meaning it can be accessed anywhere within the function or globally if declared outside any function.
- `let` and `const` are block-scoped, meaning they are only accessible within the block they are defined in. Additionally, `const` is used to declare variables that cannot be reassigned after their initial assignment.
