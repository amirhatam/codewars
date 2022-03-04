// BEST practice
const isPalindrome = (str) => str.toLowerCase() === str.split("").reverse().join("").toLowerCase();

console.log(isPalindrome("Abba"));

console.log(isPalindrome("hello"));