var list = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];

// const langdiverse = () => {
//     let count = []
//     for (let i = 0; i < list.length; i++) {
//         let language = 0
//         for (let j = 0; j < list.length; j++) {
//             console.log("i", list[i].language);
//             console.log("j", list[j].language);
//             // if (list[i].language === list[j].language) {
//             //     console.log(list[j].language);
//             //     language++
//             //     count.push(language)
//             // }
//         }
//     }
//     // return count
// }


//Best Practices
const isLanguageDiverse = () => {
    let counts = {}
        , min = Number.MAX_VALUE
        , max = 0;

    for (let dev of list)
        counts[dev.language] = (counts[dev.language] || 0) + 1;

    for (let lang in counts) {
        min = Math.min(counts[lang], min);
        max = Math.max(counts[lang], max);
    }
    return max <= 2 * min
}


console.log(isLanguageDiverse());