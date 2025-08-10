
//* Default export

export default function greet(name) { // This function is exported as the default export
  return `Hello, ${name}!`;
}

//* Importing named exports 
export const add = (a , b ) => { // This function is exported as a named export
  return a + b;
}

export const sub = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const divide = (a, b) => {
  return a / b;
}

export { // Exporting multiple named exports
        multiply, 
        divide 
    };


//* change the name in import file

export const sanket = () => {
  console.log("Sanket");
}

// export default
const rahul = () => {
  console.log("Rahul");
}

// export  default rahul; //-> This will export rahul as the default export
export { rahul as default }; //-> This will export rahul as the default export with



