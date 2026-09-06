## What is JSON?

**JSON (JavaScript Object Notation)** is a lightweight text-based format used to **store and exchange data**, especially between a client and a server through APIs.

It represents data using **key-value pairs** and structures such as objects and arrays.

### Example:

```json
{
  "name": "John",
  "age": 25,
  "isStudent": false
}
```

Here:

* `"name"` → key
* `"John"` → value
* `"age"` → key
* `25` → value

### JSON in JavaScript

When an API sends JSON data, JavaScript can convert it into a JavaScript object using:

```javascript
const data = await response.json();
```

To convert a JavaScript object into JSON:

```javascript
const jsonData = JSON.stringify(user);
```

### Interview-ready answer

> **JSON is a lightweight text-based data format used to store and exchange data between applications, especially between a frontend and backend through APIs. It is easy for both humans and programming languages to read and process.**

---

Yes — I think the problem is that I started by giving you the **technical definition** of JSON instead of first explaining **what JSON actually is**. Let's make it very simple.

### What exactly is JSON?

Think of JSON as a **way of writing data in a standard format so that different applications can understand and exchange that data.**

For example, suppose your application needs to send information about a user to a server.

Instead of sending it like this:

```text
John, 25, Pune, student
```

we can organize the information using JSON:

```json
{
  "name": "John",
  "age": 25,
  "city": "Pune",
  "occupation": "student"
}
```

That's JSON.

So, **JSON is not a programming language and it's not a database.**
It is simply a **standard format for representing data**.

### Where do we use it?

The most common situation is **communication between frontend and backend**.

```text
Frontend
   ↓
   JSON
   ↓
Backend
```

For example, your JavaScript application asks a server:

> "Give me the user information."

The server might send:

```json
{
  "name": "John",
  "age": 25
}
```

JavaScript receives that JSON data and can work with it.

### Why is it called JSON?

**J**ava**S**cript **O**bject **N**otation.

It looks very similar to a JavaScript object:

```javascript
const user = {
  name: "John",
  age: 25
};
```

But there's an important distinction:

**JavaScript object** → actual data structure inside JavaScript.

**JSON** → text format used to represent and exchange that data.

### The easiest way to remember it 🧠

> **JSON is a common language/format that applications use to package and exchange data.**

For example:

```text
JavaScript Object
       ↓
   JSON format
       ↓
     Server
```

And when the server sends it back:

```text
Server
   ↓
 JSON data
   ↓
JavaScript Object
```

That's the core idea of JSON.
