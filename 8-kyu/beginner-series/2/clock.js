//Best practise
const milliseconds = (h, m, s) => h * 60 * 60 * 1000 + m * 60 * 1000 + 1000 * s

// console.log(milliseconds(0, 1, 30));

//Another Best practise
function past(h, m, s) {
    return ((h * 3600) + (m * 60) + s) * 1000;
}

console.log(past(0, 1, 30));
