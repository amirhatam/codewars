//One solution with boucle for
const oddCount = (n) => {
    let res = 0
    for (let i = 1; i < n; i++) {
        if (i % 2 === 0) {
        } else {
            res++
        }
    }
    return res
}

console.log(countOdd(15));

//BEST practice
const oddCountB = (n) => Math.floor(n / 2)
