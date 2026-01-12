
function outer() {
    let counter = 0;
    return function () {
        counter++;
        console.log("count is : " , counter);
    }
}
outer();


function hello() {
    console.log("sanket");
}
hello()

outer();

let counter = outer();
counter(); // 1
counter() // 2