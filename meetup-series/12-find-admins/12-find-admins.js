const list = [
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];

//One solution with map But Not accepted !!!
const findAdmin = (list, lang) => {
    let newList = []
    list.map(e => {
        if (e.githubAdmin === 'yes' && e.language === 'JavaScript') {
            newList.push(e)
        }
    })
    return newList
}

console.log(findAdmin(list, 'JavaScript'));

//Best practices
const findGitAdmin = (list, lang) => list.filter(({ language, githubAdmin }) => language === lang && githubAdmin === 'yes')

console.log(findGitAdmin(list, 'JavaScript'));