// One solution with method RegExp.test
const countNum = (a, b) => {
    let res = 0
    for (let i = a; i <= b; i++) {
        if (!/5/.test(i)) //(method) RegExp.test
            res++
    }
    return res
}
console.log(countNum(4, 17));

// One solution with method includes
function dontGiveMeFive(start, end) {
    let res = [];
    for (let i = start; i <= end; i++) {
        if (!i.toString().includes('5')) res.push(i);
    }
    return res.length;
}

console.log(dontGiveMeFive(4, 17));