// One solution
const repeatStr = (n, str) => {
    let repeat = []
    for (let i = 0; i < n; i++) {
        repeat.push(str)

    }
    return repeat.join("") //returns our result array as a string
}

console.log(repeatStr(10, "Salut"));

//BEST practices
const repeatString = (n, s) => s.repeat(n)

console.log(repeatString(4, "Salut"));
