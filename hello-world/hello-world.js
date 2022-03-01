// ONE solution
// function hello(name) {
//     if (typeof name === "undefined" || name.length === 0) {
//         return `Hello, World!`;
//     } else {
//         return `Hello, ${name[0].toUpperCase()}${name.substring(1,).toLowerCase()}!`;
//     }
// }


//BEST Pratices
const hello = s =>
    `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;

console.log(hello("Paul"));