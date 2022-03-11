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