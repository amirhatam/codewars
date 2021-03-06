//One solution
function multiply(a, b) {
    var aa = a.split('').reverse();
    var bb = b.split('').reverse();

    var stack = [];

    for (var i = 0; i < aa.length; i++) {
        for (var j = 0; j < bb.length; j++) {
            var m = aa[i] * bb[j];
            stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
        }
    }

    for (var i = 0; i < stack.length; i++) {
        var num = stack[i] % 10;
        var move = Math.floor(stack[i] / 10);
        stack[i] = num;

        if (stack[i + 1])
            stack[i + 1] += move;
        else if (move != 0)
            stack[i + 1] = move;
    }

    return stack.reverse().join('').replace(/^(0(?!$))+/, "");
}

//BEST Practices :|
// function multiply(a, b) { return (BigInt(a) * BigInt(b)).toString() }


console.log(multiply("1020303004875647366210", "2774537626200857473632627613"));