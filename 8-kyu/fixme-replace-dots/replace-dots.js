//First Solution
const replaceDots = function (str) {
    let res = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.') {
            res.push('-')
        } else {
            res.push(str[i])
        }
    }
    return res.join('')
}


//Best Practices
const replaceAllDots = function (str) {
    return str.replace(/\./g, '-');
}

console.log(replaceAllDots("one.two.three"));
