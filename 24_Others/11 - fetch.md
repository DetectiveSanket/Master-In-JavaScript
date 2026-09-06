# `fetch()`

  ## What is fetch()?

    - fetch() is a Web API used to make HTTP requests from JavaScript. 
    It is commonly used to communicate with a server, such as getting data from an API, sending data to an API, updating data, or deleting data.

    - It returns a Promise, so the response is handled asynchronously.
  
  What is the first example syntax?

  The simplest form starts with the URL you want to request:

     ```js
      fetch("https://api.example.com/users");
      ```

  `fetch()` returns a Promise. The Promise represents the future result of the
  network request, so the response is handled with `.then()` or `await`.

#####  Basic expression
```js
fetch(url)
```

##### For example:

```js
fetch("https://api.example.com/users")
```
This sends a GET request to that URL by default.

## How does fetch work?

  1. `fetch(url)` starts an HTTP request. Its default method is GET.
  2. The returned Promise settles when the server sends back a response.
  3. The first response value is a Response object, not the final JSON data.
  4. `response.json()` reads and parses the response body. It also returns a
     Promise, so it must be awaited or returned from a `.then()` callback.
  5. The parsed data can then be used by the application.

  A request can fail because of a network problem. HTTP errors such as 404 or
  500 do not automatically reject the Promise, so check `response.ok` and
  throw an error when it is false.

  ```
  JavaScript
      ↓
  fetch()
      ↓
  HTTP Request
      ↓
  Server / API
      ↓
  HTTP Response
      ↓
  Promise
      ↓
  Read response data
  ```

## A very common pattern is:

``` js
fetch("https://api.example.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```  


###  Promise syntax
```js
fetch("https://api.example.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  })
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.error("Request failed:", error);
  });
```


### async/await syntax
```js
async function getUsers() {
  try {
    const response = await fetch("https://api.example.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Request failed:", error);
  }
}
```


### Sending JSON with POST
```js
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Sanket",
  }),
});
```