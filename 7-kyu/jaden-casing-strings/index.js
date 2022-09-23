const solution = (T) => {
    const arr = T.split(" ")
    const cap = arr.map(e => e.charAt(0).toUpperCase() + e.slice(1))

    return cap.join(" ")
}


const solutionB = (T) => {
    return this.split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ")

};

console.log(solution("How can mirrors be real if our eyes aren't real"));