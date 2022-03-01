// One solution
/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
var justify = function (str, len) {
    var words = str.split(' ');
    var lines = [];

    while (words.length > 0) {
        var line = [];
        var length = -1;
        while (words.length > 0 && length + words[0].length < len) {
            var word = words.shift();
            line.push(word);
            length += word.length + 1;
        }
        var spaces = line.length - 1;

        var each = 1;
        var head = 0;
        if (len - length > 0 && words.length > 0) {
            each += ~~((len - length) / spaces);
            head = (len - length) % spaces;
        }
        lines.push(line
            .map(w => w + (head-- > 0 ? ' ' : ''))
            .join(' '.repeat(each)));
    }

    return lines.join('\n');
};
