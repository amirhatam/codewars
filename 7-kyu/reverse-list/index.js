// Solution A
function reverseList(arr) {
    return arr.sort((a, b) => b - a);
}

console.log(reverseList([1, 2, 3]));

//Solution B
function reverseList(arr) {
    return arr.reverse();
}