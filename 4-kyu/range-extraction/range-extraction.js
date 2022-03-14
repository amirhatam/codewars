const list = ([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);

//One solution
const solution = () => {
    let res = "";
    let isRange = false;

    for (let i = 0; i < list.length; ++i) {
        const j = list[i];

        if (list[i + 1] !== j + 1) {
            if (isRange) res += (list[i] === list[i - 2] + 2) ? "-" : ",";
            res += j + ",";
            isRange = false;
        }
        else if (!isRange) {
            res += j;
            isRange = true;
        }
    }
    return res.slice(0, -1);
}

// console.log(solution());

//BEST Practices
function bestPractices() {
    for (var i = 0; i < list.length; i++) {
        var j = i;
        while (list[j] - list[j + 1] == -1) j++;
        if (j != i && j - i > 1) list.splice(i, j - i + 1, list[i] + '-' + list[j]);
    }
    return list.join();
}

console.log(bestPractices());