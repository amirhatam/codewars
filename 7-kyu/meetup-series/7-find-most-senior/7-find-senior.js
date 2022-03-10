var list = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

const findSenior = () => {
    let maxAge = 0
    let res = []
    list.filter(e => {
        maxAge = Math.max(e.age)
    })
    for (let i = 0; i < list.length; i++) {
        if (list[i].age >= maxAge) {
            res.push(list[i])
        }
    }
    return res
}

console.log(findSenior());


