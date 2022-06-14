// const isUpercase = (s) => s === s.toUpperCase();



// console.log(isUpercase("Hello I AM DONALD"));
// console.log(isUpercase("HELLO I AM DONALD"));

//prototype solution Best practices
String.prototype.isUpperCase = function () {
    return this.toString() === this.toUpperCase()
}