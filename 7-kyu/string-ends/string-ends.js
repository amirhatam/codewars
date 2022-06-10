//My Solution
const sameLastStr = (a, b) => a.charAt(a.length - 1) === b.charAt(b.length - 1)

// console.log(sameLastStr('abc', 'bc'));
// console.log(sameLastStr('sumo', 'omo'));



//Best Practices  BUT it's not correct !!!
function solution(str, ending) {
    return str.endsWith(ending);
}

console.log(solution('sumo', 'omo'));
// console.log(solution('abc', 'bc'));

