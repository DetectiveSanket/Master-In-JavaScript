# CORS (Cross-Origin Resource Sharing)

## What is CORS?

CORS is a browser security mechanism that controls whether JavaScript running
on one origin may read a response from another origin.

An **origin** is made from three parts:

- protocol: `http` or `https`
- host: such as `example.com`
- port: such as `3000` or `443`

These are different origins because at least one part changes:

```text
http://localhost:3000  ->  http://localhost:5000  // different port
http://localhost:3000  ->  https://localhost:3000 // different protocol
http://localhost:3000  ->  http://api.example.com // different host
```

## Why does CORS matter with `fetch()`?

Suppose a frontend runs on `http://localhost:3000` and requests an API on
`http://localhost:5000`:

```js
fetch("http://localhost:5000/users")
	.then((response) => response.json())
	.then((users) => console.log(users))
	.catch((error) => console.error(error));
```

The browser sends the request, but it will only allow the frontend JavaScript
to read the response when the API server explicitly permits the frontend
origin with a CORS response header.

Typical browser error:

```text
Blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present.
```

CORS is enforced by browsers. Tools such as Postman, `curl`, and server-side
Node.js code do not enforce browser CORS rules in the same way.

## How does CORS work?

1. A browser page makes a cross-origin request.
2. The browser may send a normal request or a preflight `OPTIONS` request.
3. The server responds with permission headers.
4. The browser allows or blocks JavaScript from reading the response.

The server must send a header such as:

```http
Access-Control-Allow-Origin: http://localhost:3000
```

This means that pages from `http://localhost:3000` may read the response.

## Simple requests and preflight requests

A **simple request** uses an allowed method and simple headers, so it may be
sent without a preflight request. For example:

```js
fetch("https://api.example.com/users");
```

A request usually needs a preflight when it uses a method such as `PUT`,
`PATCH`, or `DELETE`, or sends non-simple headers such as
`Content-Type: application/json`.

The browser first sends something like:

```http
OPTIONS /users HTTP/1.1
Origin: http://localhost:3000
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type
```

The server must approve it, for example:

```http
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

Only after a successful preflight may the browser send the actual request.

## Server-side example: Express

Install the middleware:

```bash
npm install cors
```

Allow one frontend origin:

```js
import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
	origin: "http://localhost:3000",
}));

app.get("/users", (request, response) => {
	response.json([{ name: "Sanket" }]);
});

app.listen(5000);
```

For a public API, `origin: "*"` may be appropriate when no credentials are
needed:

```js
app.use(cors({ origin: "*" }));
```

Do not use `*` together with credentials. Browsers reject a response that has
both `Access-Control-Allow-Origin: *` and credentialed requests.

## Requests with cookies or credentials

The frontend must opt into credentials:

```js
fetch("https://api.example.com/profile", {
	credentials: "include",
});
```

The server must allow credentials and name the exact origin:

```http
Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Credentials: true
```

Never place sensitive credentials in a wildcard CORS policy.

## `mode: "no-cors"` is not a fix

```js
fetch("https://api.example.com/users", {
	mode: "no-cors",
});
```

This may avoid a visible CORS error, but it produces an **opaque response**.
JavaScript cannot read its status, headers, or body. Use it only when an opaque
request is genuinely sufficient. Normally, configure CORS on the API server
or call the API through your own backend.

## Common fixes

- Add the correct `Access-Control-Allow-Origin` header on the API server.
- Allow the method and headers used by the frontend.
- Handle `OPTIONS` requests when the browser sends a preflight.
- Use the exact frontend origin when cookies or authorization credentials are
	involved.
- Use a backend proxy when the third-party API cannot be configured for CORS.
- Do not try to solve browser CORS errors by disabling browser security.

## Remember

`fetch()` is the client-side request tool. CORS is the browser's permission
check for reading cross-origin responses. The durable fix is usually made on
the server, not by changing the `fetch()` call.
