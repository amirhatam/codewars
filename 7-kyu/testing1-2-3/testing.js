//First solution is sec Best Practices
const addLength = (a) => a.map((e, i) => `${i + 1}: ${e}`)


console.log(addLength(["a", "b", "c"]));