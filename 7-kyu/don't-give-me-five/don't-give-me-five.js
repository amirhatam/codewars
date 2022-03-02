// One solution
const countNum = (a, b) => {
    let res = 0
    for (let i = a; i <= b; i++) {
        if (!/5/.test(i)) //(method) RegExp.test
            res++
    }
    return res
}
console.log(countNum(4, 17));
