// BEST practices
const sum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}
console.log(sum(0, 2));

//Seconde solution
const getSum = (a, b) => {
    if (a == b) return a;
    else if (a < b) return a + getSum(a + 1, b);
    else return a + getSum(a - 1, b)
}
console.log(getSum(0, 2));