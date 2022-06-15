//First Solution
const spongebobMemes = (s) => {
    let res = []
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) !== ' ') {
            if (i % 2 === 0)
                res.push(s.charAt(i).toUpperCase());
            else
                res.push(s.charAt(i).toLowerCase());

        } else {
            res.push(s.charAt(i));
        }
    }
    return res.join('')
}

// console.log(spongebobMemes("stop Making spongebob Memes!"));



//BEst Practices
function spongeMeme(s) {
    return s.split('').map((v, i) => i % 2 ? v.toLowerCase() : v.toUpperCase()).join('');
}

console.log(spongeMeme("stop Making spongebob Memes!"));