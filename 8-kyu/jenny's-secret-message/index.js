// First Solution
function greet(name) {

    if (name === "Johnny")
        return "Hello, my love!";
    else
        return "Hello, " + name + "!";

}

// console.log(greet('Johnny'));

//Short way 
const greets = (n) => n === "Johnny" ? "Hello, my love!" : "Hello, " + n + "!";

console.log(greets('Johnny'));