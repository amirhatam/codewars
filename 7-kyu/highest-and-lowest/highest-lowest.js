//One solution
function highAndLow(numbers) {
    let nums = numbers.split(" ");
    return `${Math.max(...nums)} ${Math.min(...nums)}`;
}

console.log(highAndLow("1 9 3 4 -5"));