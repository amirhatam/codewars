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

// console.log(alternate(5, true, false));

//Best Practices
function alternateB(n, firstValue, secondValue) {

    return Array.from({ length: n }, (_, i) => {
        if (i % 2 === 0)
            return firstValue
        else
            return secondValue
    });
    //Short way
    // return Array.from({length:n}, (_,i)=>i%2===0?firstValue:secondValue);
}

console.log(alternateB(5, true, false));
