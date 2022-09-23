const arrayDiff = (a, b) => {
    return a.filter((e) => b.indexOf(e) === -1);
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2, 3]));