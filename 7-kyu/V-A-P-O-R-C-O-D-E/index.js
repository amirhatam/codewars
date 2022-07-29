//Solution A
const solution = (s) => {
    let removeSpace = s.split(' ').join('')
    return removeSpace.split('').join(' ').toUpperCase()
}

// console.log(solution("Why isn't my code working?"));


//BEST PRACTICES
function vaporcode(string) {
    return string.toUpperCase().split(" ").join("").split("").join("  ");
}
console.log(vaporcode("Why isn't my code working?"));