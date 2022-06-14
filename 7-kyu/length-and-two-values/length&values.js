// First Solution
const alternate = (n, f, s) => {
    let res = []
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            res.push(s)
        } else {
            res.push(f)
        }
    }
    return res
}

console.log(alternate(5, true, false));
