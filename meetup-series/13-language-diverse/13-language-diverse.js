var list = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];

//Best Practices
const isLanguageDiverse = () => {
    let counts = {}
        , min = Number.MAX_VALUE
        , max = 0;

    for (let dev of list)
        counts[dev.language] = (counts[dev.language] || 0) + 1;
    console.log(counts);

    for (let lang in counts) {
        min = Math.min(counts[lang], min);
        max = Math.max(counts[lang], max);
    }
    return max <= 2 * min
}

console.log(isLanguageDiverse());

//Second Best Practices
const languageDiverse = () => {
    newList = list.map(dev => dev.lastName)
    const num = [...new Set(list)].map(el => list.filter(e => e === el).length)
    return Math.max.apply(null, list) / Math.min.apply(null, list) <= 2
}

// console.log(languageDiverse());