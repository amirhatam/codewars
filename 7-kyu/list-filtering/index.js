const solution = (A) => {
    return A.filter(e => typeof e === 'number');
}

console.log(solution([1, 2, 'aasf', '1', '123', 123]));