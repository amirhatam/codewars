// const arr = ['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']
const arr = ['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']

//Best practices
function findUniq(a) {
    let newArr = a.map(a => { return [...new Set(a.toLowerCase())].sort().join('') }); //remove alphabet repeted 
    for (let i = 0; i < newArr.length; i++) {
        if (newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i]))
            return a[i]
    }
}

console.log(findUniq(arr));