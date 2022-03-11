const string1 = 'a'
const string2 = 'ab'
const string3 = 'aabb'

//One solution
const permutations = (str) => {
    if (!!str.length && str.length < 2) {
        return [str]
    }
    let res = []
    for (let i = 0; i < str.length; i++) {
        let elem = str[i]
        if (str.indexOf(elem) != i) {
            continue;
        }
        let remainder = str.slice(0, i) + str.slice(i + 1, str.length);

        for (let permutation of permutations(remainder)) {
            res.push(elem + permutation)
        }
    }
    return res
}


console.log(permutations(string2));


//Best Practices
function anotherPermutations(str) {
    return (str.length <= 1) ? [str] :
        Array.from(new Set(
            str.split('')
                .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
                .reduce((r, x) => r.concat(x), [])
        ));
}

console.log(anotherPermutations(string3));