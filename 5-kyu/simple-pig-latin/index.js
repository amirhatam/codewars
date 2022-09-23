// Not Work
const pigIt = (str) => str.split(" ").map(e => e.slice(1) + e[0] + "ay").join(' ');



// console.log(pigIt('Pig latin is cool !'));

const pigItB = (str) => {
    const arr = str.split(' ')
    return arr
        .map((e) => {
            return e.match(/[A-z]/i)
                ? `${e.substr(1)}${e.substr(0, 1)}ay`
                : e
        })
        .join(' ')

}
console.log(pigItB('Pig latin is cool'));