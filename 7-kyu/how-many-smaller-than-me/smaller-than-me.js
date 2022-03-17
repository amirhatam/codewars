const arr = [5, 4, 3, 2, 1]
const arr2 = [1, 2, 0]

//BEST Practices
const smaller = () => arr.map((n, i) => arr.slice(i).filter(v => v < n).length)


console.log(smallerThanMe());