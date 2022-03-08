var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
    { firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
];

//Map solution
const findJsDev = () => {
    // let res = []
    let count = 0
    list1.map(e => {
        if (e.continent === 'Europe' && e.language === 'JavaScript') {
            // res.push(e)
            count++
        }
    })
    return res
}

console.log(findJsDev());

//For solution
function countDevelopers() {
    var count = 0;
    for (var i = 0; i < list1.length; i++) {
        if (list1[i]["continent"] === "Europe") {
            if (list1[i]["language"] === "JavaScript") {
                count++;
            }
        }
    }
    return count;
}

console.log(countDevelopers());