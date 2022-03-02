function narcissistic(n) {
    return n === +n.toString().split('').reduce((s, v, i, arr) => s + Math.pow(v, arr.length), 0)
}

console.log(narcissistic(153));
